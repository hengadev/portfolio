import { fail } from "@sveltejs/kit";
import { Resend } from "resend";
import { env } from "$env/dynamic/private";
import type { Actions } from "./$types";

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const name = data.get("name")?.toString().trim() ?? "";
        const email = data.get("email")?.toString().trim() ?? "";
        const message = data.get("message")?.toString().trim() ?? "";

        if (!name || !email || !message) {
            return fail(400, { error: "missing_fields" as const });
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return fail(400, { error: "invalid_email" as const });
        }

        const resend = new Resend(env.RESEND_API_KEY);

        const { error } = await resend.emails.send({
            from: env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
            to: "contact@henga.dev",
            replyTo: email,
            subject: `Portfolio contact — ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        });

        if (error) {
            console.error("Resend error:", error);
            return fail(500, { error: "send_failed" as const });
        }

        return { success: true as const };
    },
};
