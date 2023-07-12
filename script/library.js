import {
    $,
    getClass,
    getId,
    getTag
} from "./mainScript.js";

function pageScroll(scrollValue) {
    let i = window.scrollY;
    const scrollInterval = setInterval(() => {
        if (i > scrollValue) {
            clearInterval(scrollInterval);
        }
        window.scrollTo(0, i);
        i += 3;
    }, 1);
}

getId('scroll-arrow').addEventListener('click', () => pageScroll(window.innerHeight / 2.7))