import { NextResponse } from "next/server";

type GoogleVerifyResponse = {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
  score?: number; // not used for v2 checkbox, but harmless if present
  action?: string;
};

export async function POST(req: Request) {
  try {
    const { token } = await req.json();
    if (!token) {
      return NextResponse.json({ ok: false, error: "missing_token" }, { status: 400 });
    }

    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      console.error("Missing RECAPTCHA_SECRET_KEY");
      return NextResponse.json({ ok: false, error: "server_misconfig" }, { status: 500 });
    }

    const params = new URLSearchParams();
    params.append("secret", secret);
    params.append("response", token);

    const resp = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
      cache: "no-store",
    });

    const data = (await resp.json()) as GoogleVerifyResponse;

    if (!data.success) {
      console.warn("reCAPTCHA failed:", data["error-codes"]);
      return NextResponse.json({ ok: false, error: "recaptcha_failed" }, { status: 400 });
    }

    // Optional hardening once you're live:
    // if (data.hostname !== "tindevstudios.com") {
    //   return NextResponse.json({ ok: false, error: "bad_hostname" }, { status: 400 });
    // }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("verify-recaptcha error:", e);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
