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

function handleColorChange(event, isBackgroundColor) {
    const colorValue = event.target.value;
    const reversedColor = reverseColor(colorValue);
    bookText.style.color = isBackgroundColor ? reversedColor : colorValue;
    bookTextesContainer.style.backgroundColor = isBackgroundColor ? colorValue : reversedColor;
    changeColorInput.value = isBackgroundColor ? reversedColor : colorValue;
    changeBackgroundColorInput.value = isBackgroundColor ? colorValue : reversedColor;
}

const changeColorInput = getId("change-fontColor");
const changeBackgroundColorInput = getId("change-background");

changeBackgroundColorInput.addEventListener("change", event => handleColorChange(event, true));
changeColorInput.addEventListener("change", event => handleColorChange(event, false));

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
const closeSettingModal = getId('close-setting')
const settingModal = getId('page-editing-controls-modal')

openSettingModal.addEventListener('click', () => settingModal.classList.add('show'))
closeSettingModal.addEventListener('click', () => settingModal.classList.remove('show'))

function reverseColor(hexColor) {
    hexColor = hexColor.replace('#', '');
    let r = parseInt(hexColor.substr(0, 2), 16);
    let g = parseInt(hexColor.substr(2, 2), 16);
    let b = parseInt(hexColor.substr(4, 2), 16);
    let invertedR = 255 - r;
    let invertedG = 255 - g;
    let invertedB = 255 - b;
    let invertedHexColor = '#' +
        invertedR.toString(16).padStart(2, '0') +
        invertedG.toString(16).padStart(2, '0') +
        invertedB.toString(16).padStart(2, '0');

    return invertedHexColor;
}