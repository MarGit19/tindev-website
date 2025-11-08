import { ReactNode } from "react";

export function Section({
  children,
  className = "",
  pad = "py-24 md:py-28",
  id,
}: {
  children: ReactNode;
  className?: string;
  pad?: string;
  id?: string;
}) {
  return <section id={id} className={`${pad} ${className}`}>{children}</section>;
}