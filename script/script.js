import {characters} from "./data-base-justForTest.js";

const $ = document;
const getId = id => $.querySelector(id)
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

const charSwiperWrapper = getId('#char-swiper-wrapper')

characters.forEach(character => {
    charSwiperWrapper.insertAdjacentHTML('beforeEnd', '<div class="swiper-slide"> <img src="' + character.imgAddress +'" alt="" id="char-profile"> <h1 id="char-name">' + character.name + '</h1> <div id="actions"><i class="fa fa-heart-o"></i> <button id="see-more-about-char">see more</button> </div> </div>');
});