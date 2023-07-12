// import {
//     $,
//     getClass,
//     getId,
//     getTag,
//     characters
// } from "./mainScript.js";

// const searchSuggestionElem = getId('search-suggestion')
// console.log(searchSuggestionElem);
// const searchElem = getId('search')
// searchElem.addEventListener('click', event => searchSuggestionElem.classList.add('show-list'))


// const charSwiperWrapper = getId('char-swiper-wrapper');
// characters.forEach(character => {
//     charSwiperWrapper.insertAdjacentHTML('beforeEnd', `
//     <div class="swiper-slide">
//       <img src="${character.imgAddress}" alt="" id="char-profile">
//       <h1 id="char-name">${character.name}</h1>
//       <div id="actions">
//         <i class="fa fa-heart-o like" data-name="${character.name}"></i>
//         <a id="see-more-about-char" target="_blank" href="info.html?info=${encodeURIComponent(JSON.stringify(character))}">see more</a>
//       </div>
//     </div>
//   `);
// });

// const likeButtons = Array.from(getClass('.fa-heart-o'));
// likeButtons.forEach(button => button.addEventListener('click', handleLikeCharacter));

// function handleLikeCharacter(event) {
//     const selectedCharacterName = event.target.dataset.name;
//     const selectedCharacter = characters.find(character => character.name === selectedCharacterName);
//     selectedCharacter.liked = !selectedCharacter.liked;
//     const heartIcon = event.target.classList;
//     heartIcon.toggle('fa-heart-o');
//     heartIcon.toggle('fa-heart');
// }



// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         768: {
//             slidesPerView: 3,
//             spaceBetween: 40,
//         },
//         1024: {
//             slidesPerView: 4,
//             spaceBetween: 50,
//         },
//     },
// });

// function pageScroll(scrollValue) {
//     let i = window.scrollY;
//     const scrollInterval = setInterval(() => {
//         if (i > scrollValue) {
//             clearInterval(scrollInterval);
//         }
//         window.scrollTo(0, i);
//         i += 3;
//     }, 1);
// }

// getId('scroll-arrow').addEventListener('click', () => pageScroll(window.innerHeight / 2))