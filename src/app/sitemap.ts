import type { MetadataRoute } from "next";

// TODO: replace with the real production domain once deployed to Vercel.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://swaroopudgaonkar.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
