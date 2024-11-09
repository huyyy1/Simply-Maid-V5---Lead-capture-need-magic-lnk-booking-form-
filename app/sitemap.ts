import { MetadataRoute } from "next";
import { createClient } from "@/lib/supabase/server";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createClient();

  // Fetch dynamic routes
  const { data: services } = await supabase
    .from("services")
    .select("slug")
    .eq("is_active", true);

  const { data: locations } = await supabase
    .from("locations")
    .select("slug")
    .eq("is_active", true);

  // Base routes
  const routes = [
    {
      url: "https://simplymaid.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://simplymaid.com/about",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Add more static routes
  ];

  // Add dynamic routes
  const serviceRoutes = services?.map((service) => ({
    url: `https://simplymaid.com/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  })) || [];

  const locationRoutes = locations?.map((location) => ({
    url: `https://simplymaid.com/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  })) || [];

  return [...routes, ...serviceRoutes, ...locationRoutes];
}