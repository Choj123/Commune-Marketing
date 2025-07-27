// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const emailConfig = {
  // Get these from your EmailJS dashboard at https://dashboard.emailjs.com/
  serviceID: 'YOUR_SERVICE_ID',        // e.g., 'service_abc123'
  templateID: 'YOUR_TEMPLATE_ID',      // e.g., 'template_xyz789'  
  publicKey: 'YOUR_PUBLIC_KEY'         // e.g., 'user_abcdef123456'
};

// Email template variables that will be sent:
// - to_email: marcochoj@communemarketingusa.com
// - from_name: User's name
// - business_name: User's business name
// - phone: User's phone
// - email: User's email
// - preferred_plan: Selected plan
// - info_session: Yes/No
// - message: Formatted message with all details