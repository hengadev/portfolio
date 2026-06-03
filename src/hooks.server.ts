import { redirect, type Handle } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

export const handle: Handle = async ({ event, resolve }) => {
    if (env.COMING_SOON !== "true") {
        return resolve(event);
    }
    if (event.url.pathname === "/soon") {
        return resolve(event);
    }
    throw redirect(307, "/soon");
};
