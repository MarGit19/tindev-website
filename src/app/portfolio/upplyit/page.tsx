import type { Metadata } from "next";
import UpplyitClient from "./UpplyitClient";

// SEO metadata
export const metadata: Metadata = {
  title: "Upplyit — Case Study | Tin Dev Studios",
  description:
    "How we designed and built an AI-powered career platform that helps job seekers beat ATS systems, optimize resumes, and land more interviews.",
  alternates: { canonical: "/portfolio/upplyit" },
  openGraph: {
    title: "Upplyit — Case Study | Tin Dev Studios",
    description:
      "AI-powered resume optimization and career platform. Complete product definition, UX/UI design, and full-stack development by Tin Dev Studios.",
    url: "https://tindevstudios.com/portfolio/upplyit",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upplyit — Case Study | Tin Dev Studios",
    description:
      "AI-powered resume and career platform — designed and built by Tin Dev Studios.",
  },
};

export default function UpplyitCaseStudy() {
  return <UpplyitClient />;
}