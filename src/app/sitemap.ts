import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1 },
    { path: "/privacidad/", priority: 0.3 },
    { path: "/terminos/", priority: 0.3 },
    { path: "/garantia/", priority: 0.3 },
  ];
  return pages.map(({ path, priority }) => ({
    url: new URL(path, site.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
