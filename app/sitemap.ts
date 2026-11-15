import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data/site";
import { serviceSlugs } from "@/lib/data/services";
import { projectSlugs } from "@/lib/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = (
    [
      { url: siteConfig.url, changeFrequency: "monthly", priority: 1 },
      { url: `${siteConfig.url}/about`, changeFrequency: "monthly", priority: 0.7 },
      { url: `${siteConfig.url}/services`, changeFrequency: "monthly", priority: 0.9 },
      { url: `${siteConfig.url}/projects`, changeFrequency: "monthly", priority: 0.8 },
      { url: `${siteConfig.url}/materials`, changeFrequency: "monthly", priority: 0.7 },
      { url: `${siteConfig.url}/hse-quality`, changeFrequency: "yearly", priority: 0.6 },
      { url: `${siteConfig.url}/contact`, changeFrequency: "yearly", priority: 0.8 },
    ] satisfies MetadataRoute.Sitemap
  ).map((route) => ({ ...route, lastModified }));

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${siteConfig.url}/services/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${siteConfig.url}/projects/${slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
