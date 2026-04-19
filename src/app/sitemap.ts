import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://alevencatoreiki.com.br",
      lastModified: new Date("2026-04-19"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
