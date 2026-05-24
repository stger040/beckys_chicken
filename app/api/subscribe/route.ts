import { Resend } from "resend";
import { NextResponse } from "next/server";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim() : "";

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ success: false }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Becky's Chicken <onboarding@resend.dev>",
      to: "stger040@gmail.com",
      subject: "🍗 New Waitlist Signup — Becky's Chicken",
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto;">
          <h2 style="color: #CC0000;">New Waitlist Signup!</h2>
          <p>Someone just joined the Becky's Chicken waitlist.</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr/>
          <p style="color: #888; font-size: 12px;">
            beckyschicken.com waitlist notification
          </p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
