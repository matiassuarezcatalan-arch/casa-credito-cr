import { createFileRoute } from "@tanstack/react-router";
import { getAllPosts } from "@/lib/blog";
import { properties } from "@/data/properties";
import seoPages from "@/data/seo-pages.json";
import locations from "@/data/locations.json";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const host = `${url.protocol}//${url.host}`;

        // Get blog posts
        let posts: any[] = [];
        try {
          posts = getAllPosts();
        } catch (e) {
          console.error("Error loading blog posts for sitemap:", e);
        }

        // Define static pages
        const staticPages = [
          "",
          "/blog",
          "/calcular-credito",
          "/prestamos/capital-de-inversion",
          "/prestamos/consolidacion-de-deudas",
          "/prestamos/prestamo-personal",
          "/prestamos/remodelacion-de-inmueble",
          "/propiedades",
          "/cobertura",
          "/locales",
        ];

        const currentDate = new Date().toISOString().split("T")[0];

        const sitemaps = [
          ...staticPages.map((page) => ({
            loc: `${host}${page}`,
            lastmod: currentDate,
            changefreq: page === "" ? "daily" : "weekly",
            priority: page === "" ? "1.0" : "0.8",
          })),
          ...posts.map((post) => ({
            loc: `${host}/blog/${post.slug}`,
            lastmod: post.date
              ? post.date.replace(/['"\s]/g, "")
              : currentDate,
            changefreq: "monthly",
            priority: "0.6",
          })),
          ...properties.map((property) => ({
            loc: `${host}/propiedades/${property.id}`,
            lastmod: currentDate,
            changefreq: "monthly",
            priority: "0.7",
          })),
          ...seoPages.map((page) => ({
            loc: `${host}/locales/${page.slug}`,
            lastmod: currentDate,
            changefreq: "weekly",
            priority: "0.7",
          })),
          ...locations.map((loc) => ({
            loc: `${host}/prestamos/${loc.service_key}/${loc.location_slug}`,
            lastmod: currentDate,
            changefreq: "weekly",
            priority: "0.7",
          })),
        ];

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (item) => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`.trim();

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=18000",
          },
        });
      },
    },
  },
});
