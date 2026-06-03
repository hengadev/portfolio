export type Post = {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
};

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
