"use client";
import { useEffect, useState } from "react";

export default function Toast({
  open,
  onClose,
  message,
  tone = "success",
  duration = 3500,
}: {
  open: boolean;
  onClose: () => void;
  message: string;
  tone?: "success" | "error";
  duration?: number;
}) {
  const [show, setShow] = useState(open);
  useEffect(() => setShow(open), [open]);
  useEffect(() => {
    if (!open) return;
    const id = setTimeout(() => onClose(), duration);
    return () => clearTimeout(id);
  }, [open, duration, onClose]);

  return (
    <div
      aria-live="polite"
      className={`fixed inset-x-0 top-4 z-[100] flex justify-center transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div
        className={`rounded-md px-4 py-3 text-sm shadow-sm border ${
          tone === "success"
            ? "bg-white border-zinc-200 text-ink"
            : "bg-white border-red-300 text-red-700"
        }`}
        role="status"
      >
        {message}
      </div>
    </div>
  );
}
