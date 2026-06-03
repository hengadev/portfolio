import { browser } from '$app/environment';
import { init, addMessages, getLocaleFromNavigator } from 'svelte-i18n';
import en from './locales/en.json';
import fr from './locales/fr.json';

addMessages('en', en);
addMessages('fr', fr);

init({
    fallbackLocale: 'en',
    initialLocale: browser
        ? (localStorage.getItem('lang') ?? getLocaleFromNavigator() ?? 'en').slice(0, 2)
        : 'en',
});
