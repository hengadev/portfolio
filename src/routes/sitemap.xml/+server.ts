import type { RequestHandler } from "@sveltejs/kit";
import { getPosts } from "$lib/server/blog";

const SITE = "https://henga.dev";

const STATIC_ROUTES = [
    { path: "/",                  priority: "1.0", changefreq: "monthly" },
    { path: "/about",             priority: "0.8", changefreq: "monthly" },
    { path: "/projects",          priority: "0.9", changefreq: "monthly" },
    { path: "/projects/cluo",     priority: "0.7", changefreq: "monthly" },
    { path: "/projects/leviosa",  priority: "0.7", changefreq: "monthly" },
    { path: "/projects/germinal", priority: "0.7", changefreq: "monthly" },
    { path: "/projects/encx",     priority: "0.7", changefreq: "monthly" },
    { path: "/experiments",       priority: "0.6", changefreq: "monthly" },
    { path: "/blog",              priority: "0.8", changefreq: "weekly"  },
    { path: "/contact",           priority: "0.7", changefreq: "yearly"  },
];

export const GET: RequestHandler = async () => {
    const posts = await getPosts();

    const staticUrls = STATIC_ROUTES.map(
        ({ path, priority, changefreq }) =>
            `  <url>\n    <loc>${SITE}${path}</loc>\n    <priority>${priority}</priority>\n    <changefreq>${changefreq}</changefreq>\n  </url>`
    );

    const postUrls = posts.map(
        ({ slug, date }) =>
            `  <url>\n    <loc>${SITE}/blog/${slug}</loc>\n    <lastmod>${date}</lastmod>\n    <priority>0.6</priority>\n    <changefreq>yearly</changefreq>\n  </url>`
    );

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...staticUrls, ...postUrls].join("\n")}\n</urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "max-age=0, s-maxage=3600",
        },
    });
};
