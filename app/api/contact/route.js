import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, interest, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'The Founded <contact@thefounded.app>',
        to: ['docthompsondacmdc@gmail.com'],
        reply_to: email,
        subject: `[The Founded] ${interest || 'Inquiry'} — ${name}`,
        html: `
          <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:32px;background:#0F1B1F;color:#F5F0E8;">
            <div style="border-bottom:2px solid #D8AB69;padding-bottom:16px;margin-bottom:24px;">
              <p style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#D8AB69;margin:0 0 4px;">The Founded</p>
              <h1 style="font-size:22px;font-weight:700;margin:0;color:#F5F0E8;">New Inquiry</h1>
            </div>

            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr><td style="padding:8px 0;border-bottom:1px solid rgba(216,171,105,0.3);width:120px;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#D8AB69;">From</td><td style="padding:8px 0;border-bottom:1px solid rgba(216,171,105,0.3);color:#F5F0E8;">${name}</td></tr>
              <tr><td style="padding:8px 0;border-bottom:1px solid rgba(216,171,105,0.3);font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#D8AB69;">Email</td><td style="padding:8px 0;border-bottom:1px solid rgba(216,171,105,0.3);"><a href="mailto:${email}" style="color:#D8AB69;">${email}</a></td></tr>
              ${interest ? `<tr><td style="padding:8px 0;border-bottom:1px solid rgba(216,171,105,0.3);font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#D8AB69;">Interest</td><td style="padding:8px 0;border-bottom:1px solid rgba(216,171,105,0.3);color:#F5F0E8;">${interest}</td></tr>` : ''}
            </table>

            ${message ? `
            <div style="background:rgba(216,171,105,0.1);border-left:3px solid #D8AB69;padding:16px;border-radius:4px;">
              <p style="font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#D8AB69;margin:0 0 8px;">Message</p>
              <p style="color:#F5F0E8;line-height:1.7;margin:0;white-space:pre-wrap;">${message}</p>
            </div>` : ''}

            <p style="font-size:11px;color:rgba(245,240,232,0.5);margin-top:32px;text-align:center;">
              Sent via thefounded.app · Reply directly to respond to ${name}.
            </p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Resend error:', err);
      return NextResponse.json({ error: 'Failed to send.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
