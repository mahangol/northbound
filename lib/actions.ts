'use server';

interface LeadFormState {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

function sanitize(input: string): string {
  return input
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, 1000);
}

function isValidEmail(email: string): boolean {
  // Reasonable RFC-5322-ish check without being a full parser.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitLeadForm(formData: FormData): Promise<LeadFormState> {
  const name = sanitize(String(formData.get('name') ?? ''));
  const email = sanitize(String(formData.get('email') ?? ''));
  const company = sanitize(String(formData.get('company') ?? ''));
  const spend = sanitize(String(formData.get('spend') ?? ''));
  const message = sanitize(String(formData.get('message') ?? ''));
  // Honeypot field — real users never fill this in.
  const honeypot = String(formData.get('website') ?? '');

  const errors: Record<string, string> = {};

  if (honeypot.length > 0) {
    // Silently "succeed" for bots without processing anything.
    return { success: true, message: 'Thank you.' };
  }

  if (name.length < 2) errors.name = 'Enter your full name.';
  if (!isValidEmail(email)) errors.email = 'Enter a valid work email.';
  if (company.length < 2) errors.company = 'Enter your company name.';
  if (!spend) errors.spend = 'Select your monthly marketing spend.';

  if (Object.keys(errors).length > 0) {
    return { success: false, message: 'Please correct the fields below.', errors };
  }

  // In production this would persist to a CRM / database and trigger a
  // notification (e.g. via an internal API route, queue, or email service).
  // No external network calls are made from this sandboxed environment.
  console.log('New lead captured:', { name, email, company, spend, message });

  return { success: true, message: 'Submitted.' };
}
