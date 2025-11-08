import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tindevstudios.com";
  const pages = [
    "",
    "/services",
    "/portfolio",
    "/portfolio/upplyit",
    "/pricing",
    "/about",
    "/contact",
  ];

  const now = new Date().toISOString();

  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
