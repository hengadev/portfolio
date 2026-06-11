import { Github, Twitter, Linkedin, Instagram } from "lucide-svelte";

export const socials = [
    { icon: Github, href: "https://github.com/hengadev", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/0xH3N64", label: "X" },
    {
        icon: Linkedin,
        href: "https://linkedin.com/in/garyhenryml",
        label: "LinkedIn",
    },
    {
        icon: Instagram,
        href: "https://www.instagram.com/itshenga/",
        label: "Instagram",
    },
] as const;
