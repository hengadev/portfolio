// import { getPosts } from "$lib/server/blog";
import type { PageServerLoad } from "./$types";

const GITHUB_USERNAME = "hengadev";
const CHART_CACHE_TTL_MS = 60 * 60 * 1000;

// ghchart's template is a fixed 663x104 grid: 7 day-rows at y=20..92 (step 12,
// cell size 10x10) and day-of-week labels at y=28..101. Stretching the whole
// <svg> non-uniformly (preserveAspectRatio="none") made the text glyphs look
// squished, so instead we nudge just the row/label y-coordinates apart to add
// vertical breathing room, leaving cell size and text metrics untouched.
const ROW_SPACING_FACTOR = 1.3;
const ROW_YS = [20, 32, 44, 56, 68, 80, 92];
const DAY_LABEL_YS = [28, 40, 52, 64, 77, 89, 101];
const CELL_SIZE = 10;
const BOTTOM_PADDING = 2;

let cachedChart: { svg: string; fetchedAt: number } | null = null;

function addRowSpacing(svg: string): string {
    let out = svg;
    for (const y of ROW_YS) {
        out = out.replaceAll(`y="${y}"`, `y="${Math.round(y * ROW_SPACING_FACTOR)}"`);
    }
    for (const y of DAY_LABEL_YS) {
        out = out.replaceAll(`y="${y}"`, `y="${Math.round(y * ROW_SPACING_FACTOR)}"`);
    }
    return out;
}

async function getGithubActivitySvg(fetchFn: typeof fetch): Promise<string | null> {
    if (cachedChart && Date.now() - cachedChart.fetchedAt < CHART_CACHE_TTL_MS) {
        return cachedChart.svg;
    }

    try {
        const res = await fetchFn(`https://ghchart.rshah.org/${GITHUB_USERNAME}`);
        if (!res.ok) return cachedChart?.svg ?? null;

        const raw = await res.text();
        const dimensions = raw.match(/<svg[^>]*width="(\d+)"[^>]*height="(\d+)"/);
        const width = dimensions?.[1];

        const lastRowY = Math.max(...ROW_YS) * ROW_SPACING_FACTOR;
        const newHeight = Math.round(lastRowY + CELL_SIZE + BOTTOM_PADDING);

        const svg = addRowSpacing(raw)
            .replace(
                /<svg /,
                width
                    ? `<svg viewBox="0 0 ${width} ${newHeight}" preserveAspectRatio="xMidYMid meet" `
                    : "<svg ",
            )
            .replace(/height="104"/, `height="${newHeight}"`)
            .replace(/fill:#eeeeee/g, "fill:hsl(var(--clr-light-ternary))")
            .replace(/fill:#767676/g, "fill:hsl(var(--clr-dark-ternary))");

        cachedChart = { svg, fetchedAt: Date.now() };
        return svg;
    } catch {
        return cachedChart?.svg ?? null;
    }
}

export const load: PageServerLoad = async ({ fetch }) => {
    // const posts = await getPosts();
    // return { latestPosts: posts.slice(0, 3) };
    const githubActivitySvg = await getGithubActivitySvg(fetch);
    return { latestPosts: [], githubActivitySvg };
};
