import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `Portfolio <${process.env.EMAIL_SERVER_USER}>`,
      to: "iamgaurav1993@gmail.com",
      replyTo: email,
      subject: `New message from ${name} — gauravcode.com`,
      html: `
        <div style="font-family: -apple-system, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px; background: #0D0D0B; color: #F0EFE8;">
          <div style="margin-bottom: 32px;">
            <span style="font-size: 24px; font-weight: 800; letter-spacing: -0.04em;">gaurav<span style="color: #E8FF5A;">.</span></span>
          </div>
          <h2 style="font-size: 20px; font-weight: 700; margin: 0 0 24px; color: #F0EFE8;">New contact form submission</h2>
          <div style="background: #141412; border: 1px solid #2A2A26; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <div style="margin-bottom: 16px;">
              <div style="font-size: 11px; color: #5A5A54; text-transform: uppercase; letter-spacing: 0.08em; font-family: monospace; margin-bottom: 6px;">From</div>
              <div style="font-size: 15px; color: #F0EFE8; font-weight: 600;">${name}</div>
              <div style="font-size: 13px; color: #9B9A92; font-family: monospace;">${email}</div>
            </div>
            <div>
              <div style="font-size: 11px; color: #5A5A54; text-transform: uppercase; letter-spacing: 0.08em; font-family: monospace; margin-bottom: 6px;">Message</div>
              <div style="font-size: 14px; color: #9B9A92; line-height: 1.7; white-space: pre-wrap;">${message}</div>
            </div>
          </div>
          <a href="mailto:${email}" style="display: inline-block; background: #E8FF5A; color: #0D0D0B; padding: 12px 24px; border-radius: 100px; font-weight: 700; font-size: 14px; text-decoration: none;">
            Reply to ${name} →
          </a>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[CONTACT]", e);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}