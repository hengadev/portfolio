import { browser } from '$app/environment';
import { init, addMessages, getLocaleFromNavigator } from 'svelte-i18n';
import en from './locales/en.json';
import fr from './locales/fr.json';

addMessages('en', en);
addMessages('fr', fr);

init({
    fallbackLocale: 'fr',
    initialLocale: browser
        ? (localStorage.getItem('lang') ?? getLocaleFromNavigator() ?? 'fr').slice(0, 2)
        : 'fr',
});
