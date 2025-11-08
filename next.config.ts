/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  eslint: {
    // Allows production builds to complete even if there are ESLint warnings/errors.
    ignoreDuringBuilds: true,
  },

  images: {
    domains: ["tindevstudios.com"],
    formats: ["image/webp", "image/avif"],
    // If you serve screenshots or assets from another domain later, add it here.
  },

  async headers() {
    // Content Security Policy notes:
    // - We allow inline scripts because Next.js uses inline <Script> for GA init.
    // - If you tighten CSP later, consider using nonces/hashes with next-safe/middleware solutions.
    const csp = [
      "default-src 'self';",
      [
        "script-src",
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'", // sometimes required for dev tools; remove if not needed in prod
        "https://www.googletagmanager.com",
        "https://www.google-analytics.com",
        "https://region1.google-analytics.com",
        "https://www.google.com",
        "https://www.gstatic.com",
        "https://www.recaptcha.net",
      ].join(" "),
      ";",
      "style-src 'self' 'unsafe-inline';",
      "img-src 'self' data: https:;",
      "font-src 'self' data: https:;",
      [
        "connect-src",
        "'self'",
        "https://api.emailjs.com",
        "https://www.google-analytics.com",
        "https://region1.google-analytics.com",
      ].join(" "),
      ";",
      [
        "frame-src",
        "https://www.google.com",
        "https://www.recaptcha.net",
      ].join(" "),
      ";",
      "object-src 'none';",
      "base-uri 'self';",
      "form-action 'self';",
    ].join(" ");

    return [
      {
        source: "/(.*)",
        headers: [
          // Clickjacking protection (ok to DENY; reCAPTCHA is in an iframe hosted by Google, not framing your site)
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // ✅ CSP aligned with reCAPTCHA + EmailJS + GA4
          { key: "Content-Security-Policy", value: csp },
        ],
      },
    ];
  },

  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      // Add other legacy paths here if needed
    ];
  },
};

export default nextConfig;
