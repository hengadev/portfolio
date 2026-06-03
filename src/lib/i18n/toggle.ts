import { browser } from '$app/environment';
import { locale } from 'svelte-i18n';

export function toggleLocale() {
    locale.update((current) => {
        const next = current === 'fr' ? 'en' : 'fr';
        if (browser) localStorage.setItem('lang', next);
        return next;
    });
}
