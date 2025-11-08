"use client";

import { Container, Section } from "@/components/ui";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";

// Small field wrapper
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-2 text-sm text-white/70">{label}</div>
      {children}
    </label>
  );
}

export default function ContactClient() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

  useEffect(() => {
    if (formRef.current) {
      const urlField = formRef.current.querySelector<HTMLInputElement>('input[name="page_url"]');
      if (urlField) urlField.value = window.location.href;
    }
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const form = formRef.current;
    if (!form) return;

    // Honeypot
    const honeypot = (form.querySelector('input[name="_gotcha"]') as HTMLInputElement)?.value;
    if (honeypot) return;

    // Basic validation
    const email = (form.querySelector('input[name="email"]') as HTMLInputElement)?.value;
    const name = (form.querySelector('input[name="name"]') as HTMLInputElement)?.value;
    if (!name || !email) {
      setErrorMsg("Please enter your name and a valid email.");
      return;
    }

    if (!captchaToken) {
      setErrorMsg("Please verify the reCAPTCHA.");
      return;
    }

    try {
      setStatus("sending");

      // 1) Verify captcha on server
      const verifyRes = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: captchaToken }),
      });
      const verifyJson = await verifyRes.json();
      if (!verifyRes.ok || !verifyJson.ok) {
        setStatus("error");
        setErrorMsg("reCAPTCHA failed — please try again.");
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
        return;
      }

      // 2) (Optional) include token in form for template logs
      let tokenInput = form.querySelector('input[name="g-recaptcha-response"]') as HTMLInputElement | null;
      if (!tokenInput) {
        tokenInput = document.createElement("input");
        tokenInput.type = "hidden";
        tokenInput.name = "g-recaptcha-response";
        form.appendChild(tokenInput);
      }
      tokenInput.value = captchaToken;

      // 3) Send via EmailJS
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY });

      setStatus("sent");
      form.reset();
      setCaptchaToken(null);
      recaptchaRef.current?.reset();

      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "contact_form_submit", { method: "emailjs" });
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        "Something went wrong sending your message. Please try again or email support@tindevstudios.com."
      );
      console.error("EmailJS error:", err);
    }
  }

  return (
    <>
      {/* Header with Starfield Background */}
      <Section pad="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16" className="relative isolate overflow-hidden">
        {/* Starfield Background - Same as Hero */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Static stars layer 1 - Small stars */}
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={`star-s-${i}`}
              className="absolute w-[1px] h-[1px] bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}

          {/* Static stars layer 2 - Medium stars */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`star-m-${i}`}
              className="absolute w-[2px] h-[2px] bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 0.9, 0.3],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}

          {/* Shooting stars */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`shooting-${i}`}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                rotate: `${Math.random() * 360}deg`,
              }}
              initial={{ opacity: 0, x: 0 }}
              animate={{
                opacity: [0, 1, 0],
                x: [0, Math.random() * 300 + 200],
                y: [0, Math.random() * 200 + 100],
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                repeatDelay: Math.random() * 10 + 5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Subtle animated blobs */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0.05, scale: 0.9 }}
          animate={{ opacity: [0.04, 0.07, 0.04], scale: [0.9, 1, 0.9] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="pointer-events-none absolute -top-40 left-1/3 h-[28rem] w-[28rem] sm:h-[32rem] sm:w-[32rem] lg:h-[40rem] lg:w-[40rem] rounded-full bg-electric-blue/30 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0.05, scale: 0.9 }}
          animate={{ opacity: [0.04, 0.07, 0.04], scale: [0.95, 1.02, 0.95] }}
          transition={{ duration: 16, repeat: Infinity, delay: 0.5 }}
          className="pointer-events-none absolute -bottom-40 right-1/4 h-[30rem] w-[30rem] sm:h-[36rem] sm:w-[36rem] lg:h-[44rem] lg:w-[44rem] rounded-full bg-mint-green/30 blur-3xl"
        />

        <Container className="relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display text-white">
              Contact
            </h1>
            <p className="mt-3 sm:mt-4 text-white/70 text-base sm:text-lg max-w-3xl mx-auto">
              Tell us about your project, timeline, and goals. We'll reply with next steps.
            </p>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Form / Success */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-0">
            {/* Accessible status region */}
            <div aria-live="polite" className="sr-only">
              {status === "sending" && "Sending your message"}
              {status === "sent" && "Message sent successfully"}
              {status === "error" && "There was an error sending your message"}
            </div>

            {status === "sent" ? (
              // ✅ Polished thank-you state (dark theme)
              <div className="text-center space-y-6 rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-mint-green/20">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 sm:w-7 sm:h-7 text-mint-green"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl text-white font-display">Thank you — we got it.</h2>
                  <p className="mt-2 text-sm sm:text-base text-white/70">
                    We'll reply within <span className="font-medium text-white">24 hours</span> (usually sooner). Check
                    your inbox (and spam, just in case).
                  </p>
                </div>

                {/* Quick next steps */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="/portfolio" className="btn-secondary">
                    See our work
                  </a>
                  <a href="/services" className="btn-primary">
                    Explore services
                  </a>
                </div>

                {/* Trust cues */}
                <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 pt-4 text-xs sm:text-sm">
                  <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                    <div className="font-medium text-white">Fast response</div>
                    <div className="mt-1 text-white/60">~24 hours on weekdays</div>
                  </div>
                  <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                    <div className="font-medium text-white">No spam</div>
                    <div className="mt-1 text-white/60">We only email about your inquiry</div>
                  </div>
                  <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                    <div className="font-medium text-white">Privacy</div>
                    <div className="mt-1 text-white/60">Your details stay confidential</div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <form ref={formRef} onSubmit={onSubmit} className="space-y-5 sm:space-y-6">
                  <Field label="Name">
                    <input
                      name="name"
                      required
                      className="field"
                      placeholder="Full Name"
                    />
                  </Field>

                  <Field label="Email">
                    <input
                      type="email"
                      name="email"
                      required
                      className="field"
                      placeholder="your@email.com"
                    />
                  </Field>

                  <Field label="Project Type">
                    <select name="project_type" className="field appearance-none cursor-pointer">
                      <option value="Website">Website</option>
                      <option value="Web Application">Web Application</option>
                      <option value="Automation / Integration">Automation / Integration</option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="Other">Other</option>
                    </select>
                  </Field>

                  <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
                    <Field label="Budget (USD)">
                      <select name="budget" className="field appearance-none cursor-pointer">
                        <option value="Under $1,000">Under $1,000</option>
                        <option value="$1,000 – $3,000">$1,000 – $3,000</option>
                        <option value="$3,000 – $7,500">$3,000 – $7,500</option>
                        <option value="$7,500+">$7,500+</option>
                      </select>
                    </Field>
                    <Field label="Timeline">
                      <select name="timeline" className="field appearance-none cursor-pointer">
                        <option value="ASAP">ASAP</option>
                        <option value="2–4 weeks">2–4 weeks</option>
                        <option value="1–2 months">1–2 months</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </Field>
                  </div>

                  <Field label="Message">
                    <textarea
                      name="message"
                      rows={6}
                      className="field"
                      placeholder="Tell us about your project..."
                    />
                  </Field>

                  {/* Hidden fields */}
                  <input type="hidden" name="page_url" />
                  <input
                    type="text"
                    name="_gotcha"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* reCAPTCHA */}
                  <div className="pt-2">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={RECAPTCHA_SITE_KEY}
                      onChange={(token) => setCaptchaToken(token)}
                      onExpired={() => setCaptchaToken(null)}
                      theme="dark"
                    />
                  </div>

                  {/* Errors */}
                  {errorMsg && (
                    <p className="text-red-400 text-sm" role="alert">
                      {errorMsg}
                    </p>
                  )}

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? "Sending…" : "Send Message"}
                    </button>
                  </div>
                </form>

                {/* Trust strip under form */}
                <div className="mt-8 grid sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                    <span className="font-medium text-white">Response time</span>
                    <div className="mt-1 text-white/60">We reply within 24 hours</div>
                  </div>
                  <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                    <span className="font-medium text-white">No spam</span>
                    <div className="mt-1 text-white/60">Only about your inquiry</div>
                  </div>
                  <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                    <span className="font-medium text-white">Privacy</span>
                    <div className="mt-1 text-white/60">We don't sell your data</div>
                  </div>
                </div>
              </>
            )}

            {/* Direct email */}
            <div className="mt-8 sm:mt-10 text-center text-xs sm:text-sm text-white/60">
              Prefer email?{" "}
              <a
                href="mailto:contactus@tindevstudios.com"
                className="text-accent underline underline-offset-4 hover:text-accent/80"
              >
                contactus@tindevstudios.com
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* ===== Minimal FAQ ===== */}
      <Section id="faq" pad="py-12 sm:py-16 md:py-20 lg:py-24 border-t border-white/10">
        <Container>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white">FAQ</h2>
            <p className="mt-3 text-sm sm:text-base text-white/70">
              Short answers to common questions about scope, billing, timelines, and ownership.
            </p>

            <div className="mt-6 sm:mt-8 space-y-4">
              {/* Use native <details> for zero-JS accordion */}
              <details className="rounded-md border border-white/10 bg-white/[0.03] p-4 sm:p-5 group">
                <summary className="cursor-pointer font-medium text-sm sm:text-base text-white list-none flex items-center justify-between">
                  <span>How do you scope projects?</span>
                  <span className="text-white/40 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed">
                  We start with a short discovery call to define goals, constraints, and risks. From there we propose
                  a small, testable first milestone (1–2 weeks) so you can validate direction with minimal risk. We
                  then expand in steady, clearly-priced increments.
                </div>
              </details>

              <details className="rounded-md border border-white/10 bg-white/[0.03] p-4 sm:p-5 group">
                <summary className="cursor-pointer font-medium text-sm sm:text-base text-white list-none flex items-center justify-between">
                  <span>How do you price and bill?</span>
                  <span className="text-white/40 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed">
                  Most work is milestone-based with a fixed price per milestone, invoiced at kickoff. Ongoing support
                  can be hourly or a monthly maintenance plan. We'll recommend the simplest model for your situation.
                </div>
              </details>

              <details className="rounded-md border border-white/10 bg-white/[0.03] p-4 sm:p-5 group">
                <summary className="cursor-pointer font-medium text-sm sm:text-base text-white list-none flex items-center justify-between">
                  <span>What's a typical timeline?</span>
                  <span className="text-white/40 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed">
                  Small sites: 2–4 weeks. MVP web apps: 4–10 weeks depending on scope. We ship in small batches so
                  you see progress weekly, not just at the end.
                </div>
              </details>

              <details className="rounded-md border border-white/10 bg-white/[0.03] p-4 sm:p-5 group">
                <summary className="cursor-pointer font-medium text-sm sm:text-base text-white list-none flex items-center justify-between">
                  <span>Who owns the code and IP?</span>
                  <span className="text-white/40 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed">
                  You do. On payment, all work-for-hire IP transfers to you. We may reuse internal tooling/boilerplate,
                  but your product code and assets are yours.
                </div>
              </details>

              <details className="rounded-md border border-white/10 bg-white/[0.03] p-4 sm:p-5 group">
                <summary className="cursor-pointer font-medium text-sm sm:text-base text-white list-none flex items-center justify-between">
                  <span>Do you provide post-launch support?</span>
                  <span className="text-white/40 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed">
                  Yes — from ad-hoc support blocks to monthly maintenance plans (updates, monitoring, small enhancements).
                </div>
              </details>
            </div>

            <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-white/60">
              Still have a question?{" "}
              <a href="#" className="text-accent underline underline-offset-4 hover:text-accent/80">
                Send it with your message
              </a>
              .
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}