import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    
    const contactData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
      budget: formData.get('budget') as string,
      timestamp: new Date().toISOString(),
    }

    // Validate required fields
    if (!contactData.name || !contactData.email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(contactData.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Format budget display
    const budgetDisplay = contactData.budget 
      ? `$${contactData.budget}K${contactData.budget === '150' ? '+' : ` - $${parseInt(contactData.budget) + 25}K`}`
      : 'Not specified'

    // Debug: Log environment variables (without revealing full API key)
    console.log('=== EMAIL DEBUG INFO ===')
    console.log('RESEND_API_KEY configured:', !!process.env.RESEND_API_KEY)
    console.log('FROM_EMAIL:', process.env.FROM_EMAIL)
    console.log('CONTACT_EMAIL:', process.env.CONTACT_EMAIL)
    console.log('Contact data:', {
      name: contactData.name,
      email: contactData.email,
      company: contactData.company || 'N/A',
      budgetDisplay
    })

    // Send email notification to your team
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h2 style="color: #0f0f0f; border-bottom: 2px solid #0f0f0f; padding-bottom: 10px;">🚀 New Contact Form Submission</h2>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #333; margin-bottom: 15px;">Contact Details:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Name:</td>
              <td style="padding: 8px;">${contactData.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px;"><a href="mailto:${contactData.email}" style="color: #0f0f0f;">${contactData.email}</a></td>
            </tr>
            ${contactData.company ? `
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Company:</td>
              <td style="padding: 8px;">${contactData.company}</td>
            </tr>` : ''}
            ${contactData.phone ? `
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px;"><a href="tel:${contactData.phone}" style="color: #0f0f0f;">${contactData.phone}</a></td>
            </tr>` : ''}
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Budget:</td>
              <td style="padding: 8px;">${budgetDisplay}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Submitted:</td>
              <td style="padding: 8px;">${new Date(contactData.timestamp).toLocaleString()}</td>
            </tr>
          </table>
        </div>

        ${contactData.message ? `
        <div style="margin: 20px 0;">
          <h3 style="color: #333; margin-bottom: 15px;">Message:</h3>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #0f0f0f; border-radius: 5px;">
            <p style="margin: 0; line-height: 1.6;">${contactData.message}</p>
          </div>
        </div>` : ''}

        <div style="margin-top: 30px; padding: 20px; background: #f0f9ff; border-radius: 5px;">
          <p style="margin: 0; color: #0f0f0f; font-weight: bold;">💡 Next Steps:</p>
          <p style="margin: 5px 0 0 0; color: #666;">Reply to this email or contact ${contactData.name} directly at ${contactData.email}</p>
        </div>
      </div>
    `

    console.log('=== ATTEMPTING TO SEND EMAIL ===')
    
    try {
      const emailResult = await resend.emails.send({
        from: process.env.FROM_EMAIL || 'noreply@nexprove.com',
        to: process.env.CONTACT_EMAIL || 'hello@nexprove.com',
        subject: `🚀 New Lead: ${contactData.name} from ${contactData.company || 'N/A'} (${budgetDisplay})`,
        html: emailHtml,
        replyTo: contactData.email,
      })

      console.log('=== EMAIL SEND SUCCESS ===')
      console.log('Resend response:', emailResult)
      console.log('Email ID:', emailResult.data?.id)
      
    } catch (emailError) {
      console.error('=== EMAIL SEND FAILED ===')
      console.error('Resend error details:', emailError)
      
      if (emailError && typeof emailError === 'object') {
        console.error('Error name:', (emailError as any).name)
        console.error('Error message:', (emailError as any).message)
        console.error('Error response:', (emailError as any).response?.data)
      }
      
      throw emailError // Re-throw to trigger the main catch block
    }

    // Log for backup (optional)
    console.log('Contact form submission processed:', {
      name: contactData.name,
      email: contactData.email,
      company: contactData.company,
      budget: budgetDisplay,
      timestamp: contactData.timestamp
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    
    // Check if it's a Resend API error
    if (error && typeof error === 'object' && 'message' in error) {
      console.error('Resend API error:', error.message)
    }

    return NextResponse.json(
      { error: 'Something went wrong sending your message. Please try again or email us directly at hello@nexprove.com.' },
      { status: 500 }
    )
  }
}