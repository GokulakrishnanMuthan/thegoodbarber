import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Section anchors belong to the homepage, not separate indexable pages.
  return [
    {
      url: new URL("/", siteConfig.url).href,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
