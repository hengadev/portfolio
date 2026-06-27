export type Post = {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
    series?: string;
    seriesOrder?: number;
};

export type SeriesEntry = Pick<Post, "slug" | "title" | "seriesOrder">;

export async function getPosts(): Promise<Post[]> {
    const modules = import.meta.glob("/src/content/blog/*.md", { eager: true });
    const posts: Post[] = [];

    for (const [path, mod] of Object.entries(modules)) {
        const m = mod as { metadata: Omit<Post, "slug"> };
        const slug = path.split("/").at(-1)!.replace(".md", "");
        posts.push({ slug, ...m.metadata });
    }

    return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export type FeedPost = Post & { body: string };

/**
 * Removes a leading YAML frontmatter block (delimited by `---`) and returns
 * the raw markdown body. Returns the input unchanged if there is no
 * frontmatter.
 */
function stripFrontmatter(raw: string): string {
    const match = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
    return match ? raw.slice(match[0].length) : raw;
}

/**
 * Returns every published post together with its full raw markdown body
 * (frontmatter stripped), sorted newest-first. The body is what RSS
 * `<content:encoded>` needs — `getPosts()` only carries the frontmatter
 * `description` excerpt, which is not the full post.
 */
export async function getPostsForFeed(): Promise<FeedPost[]> {
    const raws = import.meta.glob("/src/content/blog/*.md", {
        query: "?raw",
        import: "default",
        eager: true,
    }) as Record<string, string>;

    const posts = await getPosts();

    return posts.map((post) => ({
        ...post,
        body: stripFrontmatter(raws[`/src/content/blog/${post.slug}.md`] ?? ""),
    }));
}

export function getSeriesPosts(posts: Post[], series: string): SeriesEntry[] {
    return posts
        .filter((p) => p.series === series)
        .sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0))
        .map(({ slug, title, seriesOrder }) => ({ slug, title, seriesOrder }));
}
