const $ = document;
const getId = id => $.getElementById(id)
const getClass = classE => $.querySelectorAll(classE)
const getTag = TagE => $.querySelector(TagE)

const openMenuButton = document.querySelector('#open-menu');
const burgerMenu = document.querySelector('#menu-ul');
const menuItems = document.querySelectorAll('li');

openMenuButton.addEventListener('click', e => {
    (e.target.className === "fa fa-navicon") ? e.target.className = "fa fa-close": e.target.className = "fa fa-navicon";
    burgerMenu.classList.toggle('active');
});

menuItems.forEach(element => element.addEventListener('click', () => setTimeout(() => {
    burgerMenu.classList.remove('active');
    openMenuButton.className = "fa fa-navicon";
}, 200)));

const characters = [{
        type: 'character',
        id: 1,
        name: "john snow",
        family: "stark",
        fatherNmae: "ned",
        imgAddress: "image/characters/john-snow.jpg",
        familyImgAddress: "image/houses/House_Stark.png",
        liked: false,
    },
    {
        type: 'character',
        id: 2,
        name: "tyrion",
        family: "lanister",
        fatherNmae: "tywin",
        imgAddress: "image/characters/tyrion-lannister.jpg",
        familyImgAddress: "image/houses/House_Lannister.webp",
        liked: false,
    },
    {
        type: 'character',
        id: 3,
        name: "daenerys",
        family: "targaryen",
        fatherNmae: "aerys",
        imgAddress: "image/characters/daenerys-targaryen.jpg",
        familyImgAddress: "image/houses/House_Targaryen.webp",
        liked: false,

    },
    {
        type: 'character',
        id: 4,
        name: "jaime",
        family: "lanister",
        fatherNmae: "tywin",
        imgAddress: "image/characters/jaime-lanister.jpg",
        familyImgAddress: "image/houses/House_Lannister.webp",
        liked: false,
    },
    {
        type: 'character',
        id: 5,
        name: "arya",
        family: "stahouserk",
        fatherNmae: "ned",
        imgAddress: "image/characters/arya-srark.jpg",
        familyImgAddress: "image/houses/House_Stark.png",
        liked: false,
    },
    {
        type: 'character',
        id: 6,
        name: "cersie",
        family: "lanister",
        fatherNmae: "tywin",
        imgAddress: "image/characters/cersei-lanister.jpg",
        familyImgAddress: "image/houses/House_Lannister.webp",
        liked: false,
    },
    {
        type: 'character',
        id: 7,
        name: "robb",
        family: "stark",
        fatherNmae: "ned",
        imgAddress: "image/characters/robb-stark.jpg",
        familyImgAddress: "image/houses/House_Stark.png",
        liked: false,
    },
    {
        type: 'character',
        id: 8,
        name: "sansa",
        family: "stark",
        fatherNmae: "ned",
        imgAddress: "image/characters/sansa-stark.jpg",
        familyImgAddress: "image/houses/House_Stark.png",
        liked: false,
    }
]

const houses = [{
        type: 'house',
        id: 1,
        name: 'stark',
        imgAddress: 'image/houses/house-stark-1920.jpg',
        liked: false
    },
    {
        type: 'house',
        id: 2,
        name: 'lannister',
        imgAddress: 'image/houses/house-lannister-1920.jpg',
        liked: false
    },
    {
        type: 'house',
        id: 3,
        name: 'tully',
        imgAddress: 'image/houses/house-tully-1920.jpg',
        liked: false
    },
    {
        type: 'house',
        id: 4,
        name: 'targaryen',
        imgAddress: 'image/houses/house-targaryen-1920.jpg',
        liked: false
    },
    {
        type: 'house',
        id: 5,
        name: 'arryn',
        imgAddress: 'image/houses/house-arryn-1920.jpg',
        liked: false
    },
    {
        type: 'house',
        id: 6,
        name: 'martell',
        imgAddress: 'image/houses/house-martell-1920.jpg',
        liked: false
    },
    {
        type: 'house',
        id: 7,
        name: 'baratheon',
        imgAddress: 'image/houses/house-baratheon-1920.jpg',
        liked: false
    },
]

function handleLikeCharacter(event, data) {
    const dataName = event.target.dataset.name;
    const likeWanted = data.find(item => item.name === dataName);
    likeWanted.liked = !likeWanted.liked;
    const heartIcon = event.target.classList;
    heartIcon.toggle('fa-heart-o');
    heartIcon.toggle('fa-heart');
}

export {
    $,
    getId,
    getClass,
    characters,
    getTag,
    houses,
    handleLikeCharacter
}