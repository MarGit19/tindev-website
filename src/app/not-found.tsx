import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] grid place-items-center px-6">
      <div className="text-center">
        <div className="text-sm text-graphite">404</div>
        <h1 className="mt-2 text-3xl md:text-4xl font-light">Page not found</h1>
        <p className="mt-3 text-graphite">
          The page you’re looking for doesn’t exist or was moved.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/" className="rounded-md bg-accent px-4 py-2 text-white text-sm">Go home</Link>
          <Link href="/contact" className="text-sm text-accent underline underline-offset-4">Contact us</Link>
        </div>
      </div>
    </main>
  );
}
