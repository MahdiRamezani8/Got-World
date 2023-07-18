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
        <i class="fa fa-heart-o like" data-name="${data.name}"></i>
        <a id="see-more-about-char" target="_blank" href="info.html?info=${encodeURIComponent(JSON.stringify(data))}">see more</a>
      </div>
    </div>
  `;
    element.insertAdjacentHTML('beforeend', slideMarkup)
}

const likeButtons = Array.from(getClass('.fa-heart-o'));
likeButtons.forEach(button => button.addEventListener('click', handleLikeCharacter));

function handleLikeCharacter(event) {
    const selectedCharacterName = event.target.dataset.name;
    const selectedCharacter = characters.find(character => character.name === selectedCharacterName);
    selectedCharacter.liked = !selectedCharacter.liked;
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