export function debounce(fn, delay) {
    let id;
    return (...args) => {
        if (id) clearTimeout(id);
        id = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
