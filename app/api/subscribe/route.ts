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
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (!apiKey || !audienceId) {
      return NextResponse.json(
        { success: false, error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.contacts.create({
      email,
      audienceId,
    });

    if (error) {
      const message = error.message?.toLowerCase() ?? "";
      const isDuplicate =
        message.includes("already") ||
        message.includes("duplicate") ||
        message.includes("409");

      if (isDuplicate) {
        return NextResponse.json({ success: true });
      }

      return NextResponse.json(
        { success: false, error: "Unable to subscribe at this time." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}
