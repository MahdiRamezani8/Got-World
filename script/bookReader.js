import {
    $,
    getId,
    getClass,
    getTag
} from "./mainScript.js";

const books = {
    AGameOfThoness: {
        chapters: 5,
        chapter1Pages: 6,
        chapter2Pages: 3,
        chapter3Pages: 7,
        chapter4Pages: 4,
        chapter5Pages: 9,
    },
    AClashOfKings: {
        chapters: 3,
        chapter1Pages: 9,
        chapter2Pages: 3,
        chapter3Pages: 12,
    }
}

const bookTextesContainer = getTag('main')
const bookText = getId('book')

const changeColorInputs = getClass('.change-color')
changeColorInputs.forEach(element => {
    element.addEventListener('change', e => {
        const colorValue = e.target.value
        const target = e.target.dataset.type
        const revesedColor = reverseColor(colorValue)
        if (target == "font") {
            bookTextesContainer.style.color = colorValue
            bookTextesContainer.style.backgroundColor = revesedColor
        } else {
            bookTextesContainer.style.backgroundColor = colorValue
            bookTextesContainer.style.color = revesedColor
        }
    })
});

const changeTextsFont = getId('fonts')
changeTextsFont.addEventListener('change', e => bookText.style.fontFamily = e.target.value)


// font size input (in the top-left of doc)
const changeTextsFontSize = getId('font-size')

// adding event to font size element
changeTextsFontSize.addEventListener('change', e => bookText.style.cssText = 'font-size:' + e.target.value + 'px !important')

const paragraph = document.getElementById("book");
const lineHeight = parseInt(window.getComputedStyle(paragraph).getPropertyValue("line-height"));
const height = paragraph.getBoundingClientRect().height;
const numberOfLines = Math.round(height / lineHeight);

const openSettingModal = getId('open-setting')
const settingModal = getId('page-editing-controls-modal')

openSettingModal.addEventListener('click', () => settingModal.classList.add('show'))

function reverseColor(hexColor) {
    hexColor = hexColor.replace('#', '');

    var r = parseInt(hexColor.substr(0, 2), 16);
    var g = parseInt(hexColor.substr(2, 2), 16);
    var b = parseInt(hexColor.substr(4, 2), 16);

    var invertedR = 255 - r;
    var invertedG = 255 - g;
    var invertedB = 255 - b;

    var invertedHexColor = '#' +
        invertedR.toString(16).padStart(2, '0') +
        invertedG.toString(16).padStart(2, '0') +
        invertedB.toString(16).padStart(2, '0');

    return invertedHexColor;
}