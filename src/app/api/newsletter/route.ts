import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const email = formData.get('email') as string

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    const newsletterData = {
      email,
      timestamp: new Date().toISOString(),
    }

    // Send notification email to your team about new subscriber
    const notificationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h2 style="color: #0f0f0f; border-bottom: 2px solid #0f0f0f; padding-bottom: 10px;">📧 New Newsletter Subscription</h2>
        
        <div style="margin: 20px 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px;"><a href="mailto:${email}" style="color: #0f0f0f;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Subscribed:</td>
              <td style="padding: 8px;">${new Date(newsletterData.timestamp).toLocaleString()}</td>
            </tr>
          </table>
        </div>

        <div style="margin-top: 30px; padding: 20px; background: #f0f9ff; border-radius: 5px;">
          <p style="margin: 0; color: #0f0f0f; font-weight: bold;">💡 Action Item:</p>
          <p style="margin: 5px 0 0 0; color: #666;">Add ${email} to your email marketing platform or CRM</p>
        </div>
      </div>
    `

    // Send welcome email to subscriber
    const welcomeHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #0f0f0f; margin-bottom: 10px;">Welcome to NexProve! 🚀</h1>
          <p style="color: #666; font-size: 18px;">Thanks for joining our community of product builders</p>
        </div>

        <div style="background: #f9f9f9; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
          <h2 style="color: #0f0f0f; margin-top: 0;">What to expect:</h2>
          <ul style="color: #555; line-height: 1.8;">
            <li><strong>Product Development Insights</strong> - Latest trends and best practices</li>
            <li><strong>Case Studies</strong> - Real examples from successful projects</li>
            <li><strong>Industry Updates</strong> - Tech news and startup resources</li>
            <li><strong>Exclusive Content</strong> - Tips and tools for product teams</li>
          </ul>
        </div>

        <div style="background: linear-gradient(135deg, #0f0f0f 0%, #333 100%); padding: 25px; border-radius: 10px; text-align: center; margin-bottom: 25px;">
          <h3 style="color: white; margin-top: 0;">Ready to build something amazing?</h3>
          <p style="color: #ccc; margin-bottom: 20px;">Schedule a free consultation to discuss your next project</p>
          <a href="https://nexprove.com/contact" style="background: white; color: #0f0f0f; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block;">Get Started</a>
        </div>

        <div style="text-align: center; color: #888; font-size: 14px;">
          <p>You're receiving this because you subscribed to updates from NexProve.</p>
          <p>NexProve - Premium Product Development Studio</p>
        </div>
      </div>
    `

    // Send both emails
    await Promise.all([
      // Notification to team
      resend.emails.send({
        from: process.env.FROM_EMAIL || 'noreply@nexprove.com',
        to: process.env.CONTACT_EMAIL || 'hello@nexprove.com',
        subject: `📧 New Newsletter Subscriber: ${email}`,
        html: notificationHtml,
      }),
      // Welcome email to subscriber
      resend.emails.send({
        from: process.env.FROM_EMAIL || 'noreply@nexprove.com',
        to: email,
        subject: 'Welcome to NexProve! 🚀',
        html: welcomeHtml,
      })
    ])

    // Log for backup
    console.log('Newsletter subscription processed:', {
      email,
      timestamp: newsletterData.timestamp
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Welcome aboard! Check your email for a special welcome message.' 
    })

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    
    // Check if it's a Resend API error
    if (error && typeof error === 'object' && 'message' in error) {
      console.error('Resend API error:', error.message)
    }

    return NextResponse.json(
      { error: 'Something went wrong with your subscription. Please try again.' },
      { status: 500 }
    )
  }
}