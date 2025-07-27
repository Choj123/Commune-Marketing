# EmailJS Setup Guide for Commune Marketing

## Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com) and create a free account
2. Confirm your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, click "Add New Service"
2. Choose your email provider (Gmail, Outlook, etc.)
3. Follow the connection steps for marcochoj@communemarketingusa.com
4. **Copy your Service ID** (e.g., service_abc123)

## Step 3: Create Email Template
1. Click "Create New Template"
2. Use this template content:

```
Subject: New Join Request - {{from_name}} ({{business_name}})

Hi Marco,

You have a new join request from your website:

Name: {{from_name}}
Business: {{business_name}}
Phone: {{phone}}
Email: {{email}}
Preferred Plan: {{preferred_plan}}
Info Session Requested: {{info_session}}

Message: {{message}}

Reply to this customer at: {{email}}

Best regards,
Your Website Form
```

3. **Copy your Template ID** (e.g., template_xyz789)

## Step 4: Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. **Copy your Public Key** (e.g., user_abcdef123456)

## Step 5: Update Your Website
1. Open `/app/frontend/src/config/emailConfig.js`
2. Replace the placeholder values:
   ```javascript
   export const emailConfig = {
     serviceID: 'service_abc123',      // Your actual Service ID
     templateID: 'template_xyz789',    // Your actual Template ID  
     publicKey: 'user_abcdef123456'    // Your actual Public Key
   };
   ```

## Step 6: Test the Form
1. Go to your website
2. Fill out the join form
3. Submit it
4. Check marcochoj@communemarketingusa.com for the email

## Troubleshooting
- Make sure all three IDs are correct
- Check your email spam folder
- Verify your email service is properly connected in EmailJS
- Check the browser console for any error messages

## EmailJS Free Plan Limits
- 200 emails per month
- If you need more, upgrade to a paid plan

The form will now send all submissions directly to marcochoj@communemarketingusa.com!