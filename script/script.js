import {characters} from "./data-base-justForTest";

console.log(characters);

const $ = document;
const getId = id => $.getElementById(id)
const getClass = classE => $.getElementById(classE)

const searchInput = getId('search-input')
window.addEventListener('load', searchInputPlaceholder)
window.addEventListener('resize', searchInputPlaceholder)

function searchInputPlaceholder() {
    if (window.innerWidth < 375) {
        searchInput.placeholder = "درباره چی میخوای بدونی؟"
    }
}

function pageScroll() {
    let i = window.scrollY;
    let scrollinterval = setInterval(() => {
        window.scrollTo(0, i)
        i++;
    }, 2)
    setTimeout(() => {
        clearInterval(scrollinterval, )
    }, 600)
}


document.getElementById('scroll-arrow').addEventListener('click', pageScroll)