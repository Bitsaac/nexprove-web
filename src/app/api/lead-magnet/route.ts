import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import {
  createOrUpdateContact,
  detectRegionFromHeaders,
} from '@/lib/crm'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, country, magnetName, magnetType } = body

    // Validate required fields
    if (!name || !email || !magnetName) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Detect region
    const detectedRegion =
      country || detectRegionFromHeaders(request.headers)

    // Create/update contact in HubSpot
    const crmResult = await createOrUpdateContact({
      email,
      firstname: name,
      company,
      region: detectedRegion,
      lead_source: 'lead_magnet',
      lead_magnet: magnetName,
    })

    if (!crmResult.success) {
      console.warn('HubSpot integration failed:', crmResult.error)
      // Continue with email delivery even if CRM fails
    }

    // Get lead magnet details
    const magnetDetails = getLeadMagnetDetails(magnetName)

    // Send email with lead magnet
    const emailResult = await resend.emails.send({
      from: 'Nexprove <info@nexprove.com>',
      to: email,
      subject: `Your ${magnetType}: ${magnetDetails.title}`,
      html: generateLeadMagnetEmail(name, magnetDetails),
    })

    if (emailResult.error) {
      console.error('Email send error:', emailResult.error)
      return NextResponse.json(
        { success: false, message: 'Failed to send email' },
        { status: 500 }
      )
    }

    // Send internal notification
    await resend.emails.send({
      from: 'Nexprove Leads <info@nexprove.com>',
      to: 'info@nexprove.com',
      subject: `New Lead Magnet Download: ${magnetName}`,
      html: `
        <h2>New Lead Magnet Download</h2>
        <p><strong>Lead Magnet:</strong> ${magnetName}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Country:</strong> ${country || 'Not provided'}</p>
        <p><strong>HubSpot Status:</strong> ${crmResult.success ? `✓ Contact ${crmResult.contactId}` : '✗ Failed'}</p>
      `,
    })

    return NextResponse.json({
      success: true,
      message: 'Lead magnet sent successfully',
    })
  } catch (error) {
    console.error('Lead magnet API error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

interface LeadMagnetDetails {
  title: string
  description: string
  downloadUrl: string
  fileName: string
}

function getLeadMagnetDetails(magnetName: string): LeadMagnetDetails {
  const magnets: Record<string, LeadMagnetDetails> = {
    'business-operations-automation-checklist': {
      title: 'Business Operations Automation Checklist',
      description:
        'A comprehensive 70-point checklist to identify automation opportunities across your entire business.',
      downloadUrl:
        '/lead-magnets/business-operations-automation-checklist.pdf',
      fileName: 'business-operations-automation-checklist.pdf',
    },
    'logistics-automation-audit': {
      title: 'Logistics Automation Audit Checklist',
      description:
        'A comprehensive 15-point checklist to identify automation opportunities in your logistics operations.',
      downloadUrl: '/lead-magnets/logistics-automation-audit-checklist.pdf',
      fileName: 'logistics-automation-audit-checklist.pdf',
    },
    'operational-efficiency-scorecard': {
      title: 'Operational Efficiency Scorecard',
      description:
        'Assess your current operational maturity and discover opportunities for efficiency gains.',
      downloadUrl: '/lead-magnets/operational-efficiency-scorecard.pdf',
      fileName: 'operational-efficiency-scorecard.pdf',
    },
  }

  return (
    magnets[magnetName] || {
      title: 'Your Requested Resource',
      description: 'Thank you for your interest in Nexprove resources.',
      downloadUrl: '#',
      fileName: 'resource.pdf',
    }
  )
}

function generateLeadMagnetEmail(
  name: string,
  magnet: LeadMagnetDetails
): string {
  const firstName = name.split(' ')[0]
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || 'https://nexprove.com'

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${magnet.title}</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">

        <!-- Header -->
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #0a0a0a; margin: 0; font-size: 24px;">Nexprove</h1>
          <p style="color: #666; margin: 5px 0 0 0; font-size: 14px;">Premium Product Development Studio</p>
        </div>

        <!-- Main Content -->
        <div style="background: #f9fafb; padding: 30px; border-radius: 8px; margin-bottom: 30px;">
          <h2 style="color: #0a0a0a; margin-top: 0; font-size: 20px;">Hi ${firstName},</h2>

          <p style="margin: 20px 0;">Thank you for downloading <strong>${magnet.title}</strong>!</p>

          <p style="margin: 20px 0;">${magnet.description}</p>

          <!-- Download Button -->
          <div style="text-align: center; margin: 30px 0;">
            <a href="${baseUrl}${magnet.downloadUrl}"
               style="display: inline-block; background: #2563eb; color: white; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
              Download Your ${magnet.title.includes('Checklist') ? 'Checklist' : 'Scorecard'}
            </a>
          </div>

          <p style="margin: 20px 0; font-size: 14px; color: #666;">
            <em>Can't see the button? Copy and paste this link into your browser:</em><br>
            <a href="${baseUrl}${magnet.downloadUrl}" style="color: #2563eb; word-break: break-all;">
              ${baseUrl}${magnet.downloadUrl}
            </a>
          </p>
        </div>

        <!-- Next Steps -->
        <div style="margin-bottom: 30px;">
          <h3 style="color: #0a0a0a; font-size: 18px; margin-bottom: 15px;">What's Next?</h3>

          <p style="margin: 15px 0;">Ready to transform your operations? Here's how we can help:</p>

          <ul style="padding-left: 20px; margin: 15px 0;">
            <li style="margin: 8px 0;"><strong>Free Consultation:</strong> Discuss your automation goals with our team</li>
            <li style="margin: 8px 0;"><strong>Custom Solution:</strong> Get a tailored proposal for your specific needs</li>
            <li style="margin: 8px 0;"><strong>Case Studies:</strong> See how we've helped companies like yours</li>
          </ul>

          <div style="text-align: center; margin: 25px 0;">
            <a href="${baseUrl}/contact"
               style="display: inline-block; background: white; color: #2563eb; padding: 12px 24px; text-decoration: none; border-radius: 6px; border: 2px solid #2563eb; font-weight: 600;">
              Schedule a Free Consultation
            </a>
          </div>
        </div>

        <!-- Resources -->
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
          <h4 style="color: #0a0a0a; font-size: 16px; margin-top: 0;">More Resources:</h4>
          <ul style="padding-left: 20px; margin: 10px 0;">
            <li style="margin: 8px 0;">
              <a href="${baseUrl}/blog" style="color: #2563eb; text-decoration: none;">
                Read our logistics automation blog
              </a>
            </li>
            <li style="margin: 8px 0;">
              <a href="${baseUrl}/work" style="color: #2563eb; text-decoration: none;">
                View our case studies
              </a>
            </li>
            <li style="margin: 8px 0;">
              <a href="${baseUrl}/services" style="color: #2563eb; text-decoration: none;">
                Explore our services
              </a>
            </li>
          </ul>
        </div>

        <!-- Footer -->
        <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #666; font-size: 14px;">
          <p style="margin: 5px 0;">
            <strong>Nexprove</strong><br>
            Premium Product Development Studio
          </p>
          <p style="margin: 10px 0;">
            <a href="${baseUrl}" style="color: #2563eb; text-decoration: none; margin: 0 10px;">Website</a> |
            <a href="${baseUrl}/contact" style="color: #2563eb; text-decoration: none; margin: 0 10px;">Contact</a> |
            <a href="${baseUrl}/blog" style="color: #2563eb; text-decoration: none; margin: 0 10px;">Blog</a>
          </p>
          <p style="margin: 15px 0; font-size: 12px; color: #999;">
            You're receiving this because you requested "${magnet.title}" from Nexprove.<br>
            We'll occasionally send you product development insights and resources.
          </p>
        </div>

      </body>
    </html>
  `
}
