import Link from "next/link";
import { ReactNode } from "react";

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-white text-sm md:text-base font-medium transition-[filter] hover:brightness-90"
    >
      {children}
    </Link>
  );
}
