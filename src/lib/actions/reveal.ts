import type { Action } from 'svelte/action';

type RevealOptions = {
    delay?: number;
    threshold?: number;
};

export const reveal: Action<Element, RevealOptions | undefined> = (node, options) => {
    const delay = options?.delay ?? 0;
    const threshold = options?.threshold ?? 0.12;

    if (delay) node.style.setProperty('--reveal-delay', `${delay}ms`);
    node.classList.add('reveal');

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                node.classList.add('reveal--visible');
                observer.disconnect();
            }
        },
        { threshold }
    );

    observer.observe(node);

    return { destroy: () => observer.disconnect() };
};
