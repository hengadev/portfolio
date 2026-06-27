import type { RequestHandler } from "@sveltejs/kit";
import { getPostsForFeed } from "$lib/server/blog";

const SITE = "https://henga.dev";
const CHANNEL_TITLE = "Gary Henry";
const CHANNEL_DESCRIPTION =
    "Writing on Go, distributed systems, and building software.";

/** Escape text for safe inclusion in XML element content or attribute values. */
function escapeXml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

export const GET: RequestHandler = async () => {
    const posts = await getPostsForFeed();

    const items = posts
        .map((post) => {
            const url = `${SITE}/blog/${post.slug}`;
            const pubDate = new Date(post.date).toUTCString();
            return [
                "    <item>",
                `      <title>${escapeXml(post.title)}</title>`,
                `      <link>${url}</link>`,
                `      <guid isPermaLink="true">${url}</guid>`,
                `      <pubDate>${pubDate}</pubDate>`,
                `      <description>${escapeXml(post.description)}</description>`,
                `      <content:encoded>${escapeXml(post.body)}</content:encoded>`,
                "    </item>",
            ].join("\n");
        })
        .join("\n");

    const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(CHANNEL_TITLE)}</title>
    <link>${SITE}</link>
    <description>${escapeXml(CHANNEL_DESCRIPTION)}</description>
    <language>en</language>
${items}
  </channel>
</rss>`;

    return new Response(feed, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "max-age=0, s-maxage=3600",
        },
    });
};
