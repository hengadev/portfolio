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

export function getSeriesPosts(posts: Post[], series: string): SeriesEntry[] {
    return posts
        .filter((p) => p.series === series)
        .sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0))
        .map(({ slug, title, seriesOrder }) => ({ slug, title, seriesOrder }));
}
