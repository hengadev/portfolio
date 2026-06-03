import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { Post } from "$lib/server/blog";
import type { Component } from "svelte";

export const load: PageLoad = async ({ params }) => {
    const modules = import.meta.glob("/src/content/blog/*.md");
    const loader = modules[`/src/content/blog/${params.slug}.md`];

    if (!loader) {
        throw error(404, "Post not found");
    }

    const mod = (await loader()) as { default: Component; metadata: Omit<Post, "slug"> };
    return {
        component: mod.default,
        metadata: { slug: params.slug, ...mod.metadata } satisfies Post,
    };
};
