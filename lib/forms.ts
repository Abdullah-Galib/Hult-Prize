import { NextResponse } from 'next/server';

/**
 * Shared POST handler for public forms (contact / sponsor inquiries).
 * Validates input server-side. Currently logs the submission — wire this to
 * your delivery channel of choice (Resend/SMTP/Formspree/Google Sheets) before
 * going live, and consider adding rate limiting / a captcha on the client.
 */
export async function handleFormPost(
  req: Request,
  requiredFields: string[],
  logLabel: string
): Promise<NextResponse> {
  let data: Record<string, unknown>;

  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const values: Record<string, string> = {};
  for (const field of requiredFields) {
    const value = typeof data[field] === 'string' ? (data[field] as string).trim() : '';
    if (!value) {
      return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 });
    }
    values[field] = value;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  // TODO: replace with a real delivery integration before launch.
  console.log(`[${logLabel}]`, values);

  return NextResponse.json({ ok: true });
}
