const $ = document;
const getId = id => $.getElementById(id)
const getClass = classE => $.querySelectorAll(classE)

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
        id: 1,
        name: "john snow",
        family: "stark",
        imgAddress: "image/characters/john-snow.png",
        familyImgAddress: "image/houses/House_Stark.png",
        liked: false,
    },
    {
        id: 2,
        name: "tyrion lanister",
        family: "lanister",
        imgAddress: "image/characters/tyrion-lannister.png",
        familyImgAddress: "image/houses/House_Lannister.webp",
        liked: false,
    },
    {
        id: 3,
        name: "daenerys",
        family: "targaryen",
        imgAddress: "image/characters/daenerys-targaryen.png",
        familyImgAddress: "image/houses/House_Targaryen.webp",
        liked: false,

    },
    {
        id: 4,
        name: "jaime lanister",
        family: "lanister",
        imgAddress: "image/characters/jaime-lanister.png",
        familyImgAddress: "image/houses/House_Lannister.webp",
        liked: false,
    },
    {
        id: 5,
        name: "arya stark",
        family: "stark",
        imgAddress: "image/characters/arya-stark.png",
        familyImgAddress: "image/houses/House_Stark.png",
        liked: false,
    },
    {
        id: 6,
        name: "cersie lanister",
        family: "lanister",
        imgAddress: "image/characters/cersei-lanister.png",
        familyImgAddress: "image/houses/House_Lannister.webp",
        liked: false,
    },
    {
        id: 7,
        name: "robb stark",
        family: "stark",
        imgAddress: "image/characters/robb-stark.png",
        familyImgAddress: "image/houses/House_Stark.png",
        liked: false,
    },
    {
        id: 8,
        name: "sansa stark",
        family: "stark",
        imgAddress: "image/characters/sansa-stark.png",
        familyImgAddress: "image/houses/House_Stark.png",
        liked: false,
    }
]


// const places = [
//     {id: 1, name:, imgAddress:,},
//     {id: 2, name:, imgAddress:,},
//     {id: 3, name:, imgAddress:,},
//     {id: 4, name:, imgAddress:,},
//     {id: 5, name:, imgAddress:,},
//     {id: 6, name:, imgAddress:,},
//     {id: 7, name:, imgAddress:,},
//     {id: 8, name:, imgAddress:,},
// ]

// const houses = [
//     {id: 1, name:, imgAddress:,},
//     {id: 2, name:, imgAddress:,},
//     {id: 3, name:, imgAddress:,},
//     {id: 4, name:, imgAddress:,},
//     {id: 5, name:, imgAddress:,},
//     {id: 6, name:, imgAddress:,},
//     {id: 7, name:, imgAddress:,},
//     {id: 8, name:, imgAddress:,},
// ]

export {
    $,
    getId,
    getClass,
    characters
}