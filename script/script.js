import {
    characters
} from "./data-base-justForTest.js";

const $ = document;
const getId = id => $.getElementById(id)
const getClass = classE => $.querySelectorAll(classE)

const searchInput = getId('search-input')
window.addEventListener('load', searchInputPlaceholder)
window.addEventListener('resize', searchInputPlaceholder)

function searchInputPlaceholder() {
    if (window.innerWidth < 375) {
        searchInput.placeholder = "درباره چی میخوای بدونی؟"
    }
}

function pageScroll(scrollValue) {
    let i = window.scrollY;
    let scrollinterval = setInterval(() => {
        if (i == scrollValue) {
            clearInterval(scrollinterval)
        }
        window.scrollTo(0, i)
        i++;
    }, 1)
}

getId('scroll-arrow').addEventListener('click', () => pageScroll(window.innerHeight))

const charSwiperWrapper = getId('char-swiper-wrapper')
characters.forEach(character => {
    charSwiperWrapper.insertAdjacentHTML('beforeEnd', '<div class="swiper-slide"> <img src="' + character.imgAddress + '" alt="" id="char-profile"> <h1 id="char-name">' + character.name + '</h1> <div id="actions"><i class="fa fa-heart-o"></i> <button id="see-more-about-char">see more</button> </div> </div>');
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});