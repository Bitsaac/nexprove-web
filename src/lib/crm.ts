/**
 * HubSpot CRM Integration Layer
 *
 * Handles contact creation, tagging, and lifecycle tracking
 * Uses HubSpot API v3 (Contacts API)
 */

export interface ContactData {
  email: string
  firstname?: string
  lastname?: string
  company?: string
  phone?: string
  website?: string
  message?: string
  region?: 'CA' | 'US' | 'DE' | 'NG' | 'unknown'
  lead_source?: string
  lead_magnet?: string
  budget?: string
}

export interface HubSpotContact {
  properties: {
    email: string
    firstname?: string
    lastname?: string
    company?: string
    phone?: string
    website?: string
    message?: string
    nexprove_region?: string
    lead_source?: string
    lead_magnet_downloaded?: string
    project_budget?: string
    lifecyclestage?: string
  }
}

/**
 * Create or update a contact in HubSpot
 */
export async function createOrUpdateContact(
  data: ContactData
): Promise<{ success: boolean; contactId?: string; error?: string }> {
  const apiKey = process.env.HUBSPOT_API_KEY

  if (!apiKey) {
    console.warn('HubSpot API key not configured')
    return {
      success: false,
      error: 'HubSpot integration not configured',
    }
  }

  try {
    // Split name into first and last if provided as full name
    const nameParts = data.firstname?.split(' ') || []
    const firstname = nameParts[0] || data.firstname
    const lastname = nameParts.slice(1).join(' ') || data.lastname

    const contact: HubSpotContact = {
      properties: {
        email: data.email,
        firstname,
        lastname,
        company: data.company,
        phone: data.phone,
        website: data.website,
        message: data.message,
        nexprove_region: data.region,
        lead_source: data.lead_source || 'website',
        lead_magnet_downloaded: data.lead_magnet,
        project_budget: data.budget,
        lifecyclestage: data.lead_magnet ? 'lead' : 'subscriber',
      },
    }

    const response = await fetch(
      'https://api.hubapi.com/crm/v3/objects/contacts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(contact),
      }
    )

    if (!response.ok) {
      // If contact exists, update instead
      if (response.status === 409) {
        return await updateExistingContact(data, apiKey)
      }

      const error = await response.text()
      console.error('HubSpot API error:', error)
      return { success: false, error: 'Failed to create contact' }
    }

    const result = await response.json()
    return { success: true, contactId: result.id }
  } catch (error) {
    console.error('HubSpot integration error:', error)
    return { success: false, error: 'CRM integration failed' }
  }
}

/**
 * Update an existing contact by email
 */
async function updateExistingContact(
  data: ContactData,
  apiKey: string
): Promise<{ success: boolean; contactId?: string; error?: string }> {
  try {
    // First, search for contact by email
    const searchResponse = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/search`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                {
                  propertyName: 'email',
                  operator: 'EQ',
                  value: data.email,
                },
              ],
            },
          ],
        }),
      }
    )

    if (!searchResponse.ok) {
      return { success: false, error: 'Contact search failed' }
    }

    const searchResult = await searchResponse.json()
    if (!searchResult.results || searchResult.results.length === 0) {
      return { success: false, error: 'Contact not found' }
    }

    const contactId = searchResult.results[0].id

    // Update contact properties
    const nameParts = data.firstname?.split(' ') || []
    const firstname = nameParts[0] || data.firstname
    const lastname = nameParts.slice(1).join(' ') || data.lastname

    const updateResponse = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          properties: {
            firstname,
            lastname,
            company: data.company,
            phone: data.phone,
            website: data.website,
            message: data.message,
            nexprove_region: data.region,
            lead_source: data.lead_source || 'website',
            lead_magnet_downloaded: data.lead_magnet,
            project_budget: data.budget,
            lifecyclestage: data.lead_magnet ? 'lead' : 'subscriber',
          },
        }),
      }
    )

    if (!updateResponse.ok) {
      const error = await updateResponse.text()
      console.error('HubSpot update error:', error)
      return { success: false, error: 'Failed to update contact' }
    }

    return { success: true, contactId }
  } catch (error) {
    console.error('Contact update error:', error)
    return { success: false, error: 'Contact update failed' }
  }
}

/**
 * Track lead magnet download in HubSpot
 */
export async function trackLeadMagnetDownload(
  email: string,
  magnetName: string,
  region?: string
): Promise<{ success: boolean }> {
  return createOrUpdateContact({
    email,
    lead_magnet: magnetName,
    region: region as ContactData['region'],
    lead_source: 'lead_magnet',
  }).then((result) => ({ success: result.success }))
}

/**
 * Track newsletter signup in HubSpot
 */
export async function trackNewsletterSignup(
  email: string
): Promise<{ success: boolean }> {
  return createOrUpdateContact({
    email,
    lead_source: 'newsletter',
  }).then((result) => ({ success: result.success }))
}

/**
 * Detect region from request headers (for server-side)
 */
export function detectRegionFromHeaders(
  headers: Headers
): ContactData['region'] {
  const country = headers.get('x-vercel-ip-country') || ''

  switch (country) {
    case 'CA':
      return 'CA'
    case 'US':
      return 'US'
    case 'DE':
      return 'DE'
    case 'NG':
      return 'NG'
    default:
      return 'unknown'
  }
}
