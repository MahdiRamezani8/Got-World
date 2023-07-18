import {
    $,
    getClass,
    getId,
    getTag,
    characters,
    houses
} from "./mainScript.js";

const searchSuggestionElem = getId('search-suggestion')
const searchBoxInput = getId('search')

searchBoxInput.addEventListener('keydown', () => {
    searchSuggestionElem.classList.add('show-list')
    searchSuggestionElem.innerHTML = ''
    const inputValue = searchBoxInput.value;
    let suggests = searchForSimularWord(inputValue)
    suggests = suggests.map(suggest => `<li class="suggest-item">${suggest}</li>`).join('')
    searchSuggestionElem.insertAdjacentHTML('beforeend', suggests)
})

function searchForSimularWord(text) {
    const allSuggests = []
    const characterSuggests = characters.filter(item => item.name.includes(text) == true)
    const HouseSuggests = houses.filter(item => item.name.includes(text) == true)
    characterSuggests.forEach(item => allSuggests.push(item.name))
    HouseSuggests.forEach(item => allSuggests.push(item.name))
    return allSuggests
}

const charSwiperWrapper = getId('char-swiper-wrapper');
const houseSwiperWrapper = getId('house-swiper-wrapper');
characters.forEach(character => createSlide(character, charSwiperWrapper));
houses.forEach(house => createSlide(house, houseSwiperWrapper))

function createSlide(data, element) {
    const slideMarkup = `
    <div class="swiper-slide">
      <img src="${data.imgAddress}" alt="" id="char-profile">
      <h1 id="char-name">${data.name}</h1>
      <div id="actions">
        <i class="fa fa-heart-o like ${data.type}" data-name="${data.name}"></i>
        <a id="see-more-about-char" target="_blank" href="info.html?info=${encodeURIComponent(JSON.stringify(data))}">see more</a>
      </div>
    </div>
  `;
    element.insertAdjacentHTML('beforeend', slideMarkup)
}

const characterLikeButtons = Array.from(getClass('.character'));
const houseLikeButtons = Array.from(getClass('.house'));
characterLikeButtons.forEach(button => button.addEventListener('click', (event) => handleLikeCharacter(event, characters)));
houseLikeButtons.forEach(button => button.addEventListener('click', (event) => handleLikeCharacter(event, houses)));

function handleLikeCharacter(event, data) {
    const dataName = event.target.dataset.name;
    const likeWanted = data.find(item => item.name === dataName);
    likeWanted.liked = !likeWanted.liked;
    const heartIcon = event.target.classList;
    heartIcon.toggle('fa-heart-o');
    heartIcon.toggle('fa-heart');
}

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

function pageScroll(scrollValue) {
    let i = window.scrollY;
    const scrollInterval = setInterval(() => {
        if (i > scrollValue) {
            clearInterval(scrollInterval);
        }
        window.scrollTo(0, i);
        i += 5;
    }, 1);
}

getId('scroll-arrow').addEventListener('click', () => pageScroll(window.innerHeight / 2))