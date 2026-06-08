import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { Post } from "$lib/server/blog";
import { getPosts, getSeriesPosts } from "$lib/server/blog";

export const load: PageServerLoad = async ({ params }) => {
    const allPosts = await getPosts();
    const post = allPosts.find((p) => p.slug === params.slug);

    if (!post) {
        throw error(404, "Post not found");
    }

    let seriesEntries = null;
    if (post.series) {
        seriesEntries = getSeriesPosts(allPosts, post.series);
    }

    return {
        metadata: post,
        seriesEntries,
    };
};
