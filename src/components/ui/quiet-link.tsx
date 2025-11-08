import Link from "next/link";
import { ReactNode } from "react";

export function QuietLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-accent underline underline-offset-4 hover:opacity-80">
      {children}
    </Link>
  );
}
