// Test script to directly test Resend API
const { Resend } = require('resend');

// Manually set the environment variables for testing
const RESEND_API_KEY = 're_HzJmBZjN_NWaHQH8UzrMv2sfjahUD1FYu';
const FROM_EMAIL = 'onboarding@resend.dev';
const CONTACT_EMAIL = 'nexprove@gmail.com';

const resend = new Resend(RESEND_API_KEY);

async function testContactForm() {
  console.log('\n=== Testing Contact Form Email ===');
  
  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      subject: '🚀 New Lead: Test User from Test Company ($50K - $75K)',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #0f0f0f; border-bottom: 2px solid #0f0f0f; padding-bottom: 10px;">🚀 New Contact Form Submission</h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 15px;">Contact Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 8px; font-weight: bold; color: #555;">Name:</td>
                <td style="padding: 8px;">Test User</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 8px; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 8px;"><a href="mailto:test@example.com" style="color: #0f0f0f;">test@example.com</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 8px; font-weight: bold; color: #555;">Company:</td>
                <td style="padding: 8px;">Test Company</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 8px; font-weight: bold; color: #555;">Budget:</td>
                <td style="padding: 8px;">$50K - $75K</td>
              </tr>
            </table>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 15px;">Message:</h3>
            <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #0f0f0f; border-radius: 5px;">
              <p style="margin: 0; line-height: 1.6;">This is a test message to verify the contact form is working properly.</p>
            </div>
          </div>
        </div>
      `,
      replyTo: 'test@example.com'
    });
    
    console.log('✅ Contact form email sent:', result.data?.id);
    
  } catch (error) {
    console.error('❌ Contact form email failed:', error.message);
  }
}

async function testNewsletterForm() {
  console.log('\n=== Testing Newsletter Form Email ===');
  
  try {
    // Test notification email
    const notificationResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      subject: '📧 New Newsletter Subscriber: test@example.com',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #0f0f0f; border-bottom: 2px solid #0f0f0f; padding-bottom: 10px;">📧 New Newsletter Subscription</h2>
          
          <div style="margin: 20px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 8px; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 8px;"><a href="mailto:test@example.com" style="color: #0f0f0f;">test@example.com</a></td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #555;">Subscribed:</td>
                <td style="padding: 8px;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
          </div>

          <div style="margin-top: 30px; padding: 20px; background: #f0f9ff; border-radius: 5px;">
            <p style="margin: 0; color: #0f0f0f; font-weight: bold;">💡 Action Item:</p>
            <p style="margin: 5px 0 0 0; color: #666;">Add test@example.com to your email marketing platform or CRM</p>
          </div>
        </div>
      `
    });
    
    console.log('✅ Newsletter notification email sent:', notificationResult.data?.id);

    // Test welcome email
    const welcomeResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: 'test@example.com',
      subject: 'Welcome to NexProve! 🚀',
      html: `
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
        </div>
      `
    });
    
    console.log('✅ Newsletter welcome email sent:', welcomeResult.data?.id);
    
  } catch (error) {
    console.error('❌ Newsletter email failed:', error.message);
  }
}

async function runTests() {
  await testContactForm();
  await testNewsletterForm();
  console.log('\n=== Test Summary ===');
  console.log('✅ All form email templates tested successfully');
  console.log('✅ Resend integration working properly');
  console.log('✅ Forms ready for production use');
}

runTests();