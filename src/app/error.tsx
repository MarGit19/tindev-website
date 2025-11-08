"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Optionally log to a service like Sentry
    console.error("App error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <main className="min-h-[70vh] grid place-items-center px-6">
          <div className="text-center">
            <div className="text-sm text-graphite">Something went wrong</div>
            <h1 className="mt-2 text-3xl md:text-4xl font-light">We’re on it</h1>
            <p className="mt-3 text-graphite">
              Please try again. If the problem persists, reach out and we’ll help immediately.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button onClick={() => reset()} className="rounded-md bg-accent px-4 py-2 text-white text-sm">
                Try again
              </button>
              <Link href="/contact" className="text-sm text-accent underline underline-offset-4">Contact support</Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
