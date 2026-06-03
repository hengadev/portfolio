import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
    if (!browser) return 'light';
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export const theme = writable<Theme>(getInitialTheme());

if (browser) {
    theme.subscribe((value) => {
        document.documentElement.dataset.theme = value;
        localStorage.setItem('theme', value);
    });
}

export function toggleTheme() {
    theme.update((t) => (t === 'light' ? 'dark' : 'light'));
}
