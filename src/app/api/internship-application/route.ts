import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { checkRateLimit, getClientIp } from '@/lib/rate-limiter'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    // Rate limiting: 3 applications per hour (stricter for applications)
    const clientIp = getClientIp(req)
    const rateLimit = checkRateLimit(clientIp, {
      maxRequests: 3,
      windowMs: 60 * 60 * 1000, // 1 hour
    })

    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error:
            'Too many application attempts. Please try again in an hour.',
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimit.limit.toString(),
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': new Date(rateLimit.resetAt).toISOString(),
          },
        },
      )
    }

    const formData = await req.formData()

    const applicationData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      role: formData.get('role') as string,
      experience: formData.get('experience') as string,
      portfolio: formData.get('portfolio') as string,
      availability: formData.get('availability') as string,
      motivation: formData.get('motivation') as string,
      goals: formData.get('goals') as string,
      team_experience: formData.get('team_experience') as string,
      timestamp: new Date().toISOString(),
    }

    // Validate required fields
    if (!applicationData.name || !applicationData.email || !applicationData.role) {
      return NextResponse.json(
        { error: 'Name, email, and role are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(applicationData.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Email notification to team
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h2 style="color: #0f0f0f; border-bottom: 2px solid #0f0f0f; padding-bottom: 10px;">🎯 New Bitsaac Cohort 01 Application</h2>

        <div style="margin: 20px 0;">
          <h3 style="color: #333; margin-bottom: 15px;">Applicant Details:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px; font-weight: bold; color: #555; width: 180px;">Name:</td>
              <td style="padding: 8px;">${applicationData.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px;"><a href="mailto:${applicationData.email}" style="color: #0f0f0f;">${applicationData.email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px;"><a href="tel:${applicationData.phone}" style="color: #0f0f0f;">${applicationData.phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Role / Track:</td>
              <td style="padding: 8px;"><strong>${applicationData.role}</strong></td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Experience:</td>
              <td style="padding: 8px;">${applicationData.experience}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Availability:</td>
              <td style="padding: 8px;">${applicationData.availability}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Portfolio / Links:</td>
              <td style="padding: 8px;"><a href="${applicationData.portfolio}" style="color: #0f0f0f;" target="_blank">${applicationData.portfolio}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Submitted:</td>
              <td style="padding: 8px;">${new Date(applicationData.timestamp).toLocaleString()}</td>
            </tr>
          </table>
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #333; margin-bottom: 15px;">Motivation:</h3>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #0f0f0f; border-radius: 5px;">
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${applicationData.motivation}</p>
          </div>
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #333; margin-bottom: 15px;">Goals:</h3>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #0f0f0f; border-radius: 5px;">
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${applicationData.goals}</p>
          </div>
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #333; margin-bottom: 15px;">Team Experience:</h3>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #0f0f0f; border-radius: 5px;">
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${applicationData.team_experience}</p>
          </div>
        </div>

        <div style="margin-top: 30px; padding: 20px; background: #f0f9ff; border-radius: 5px;">
          <p style="margin: 0; color: #0f0f0f; font-weight: bold;">💡 Next Steps:</p>
          <p style="margin: 5px 0 0 0; color: #666;">Review application and send screening task if shortlisted</p>
        </div>
      </div>
    `

    // Send email notification to team
    try {
      await resend.emails.send({
        from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
        to: process.env.CONTACT_EMAIL || 'admin@nexprove.com',
        subject: `🎯 Bitsaac Application: ${applicationData.name} (${applicationData.role})`,
        html: emailHtml,
        replyTo: applicationData.email,
      })
    } catch (emailError) {
      // Only log in development
      if (process.env.NODE_ENV === 'development') {
        console.error('Email send failed:', emailError)
      }
      // Continue anyway - we'll still log the application
    }

    // Log to Google Sheets (non-blocking)
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            timestamp: applicationData.timestamp,
            name: applicationData.name,
            email: applicationData.email,
            phone: applicationData.phone,
            role: applicationData.role,
            experience: applicationData.experience,
            portfolio: applicationData.portfolio,
            availability: applicationData.availability,
            motivation: applicationData.motivation,
            goals: applicationData.goals,
            team_experience: applicationData.team_experience,
          }),
        })
      } catch (sheetsError) {
        // Don't fail the request if sheets logging fails
        if (process.env.NODE_ENV === 'development') {
          console.error('Google Sheets logging failed:', sheetsError)
        }
      }
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you for applying to Bitsaac Cohort 01! We've received your application and will review it within 5-7 business days. Check your email for confirmation.",
    })
  } catch (error) {
    // Only log in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Bitsaac application error:', error)
    }

    return NextResponse.json(
      {
        error:
          'Something went wrong submitting your application. Please try again or email us at info@nexprove.com.',
      },
      { status: 500 }
    )
  }
}
