import {
    $,
    getId,
    getClass,
    getTag
} from "./mainScript.js";

const bookTextesContainer = getTag('main')
const bookText = getId('book')
const changeColorInput = getId("change-fontColor");
const changeBackgroundColorInput = getId("change-background");
const openSettingModal = getId('open-setting')
const closeSettingModal = getId('close-setting')
const settingModal = getId('page-editing-controls-modal')
const changeTextsFontSize = getId('font-size')
const changeTextsFont = getId('fonts')

function handleColorChange(event, isBackgroundColor) {
    const colorValue = event.target.value;
    const reversedColor = reverseColor(colorValue);
    bookText.style.color = isBackgroundColor ? reversedColor : colorValue;
    bookTextesContainer.style.backgroundColor = isBackgroundColor ? colorValue : reversedColor;
    changeColorInput.value = isBackgroundColor ? reversedColor : colorValue;
    changeBackgroundColorInput.value = isBackgroundColor ? colorValue : reversedColor;
}

changeBackgroundColorInput.addEventListener("change", event => handleColorChange(event, true));
changeColorInput.addEventListener("change", event => handleColorChange(event, false));
changeTextsFont.addEventListener('change', e => bookText.style.fontFamily = e.target.value)
changeTextsFontSize.addEventListener('change', e => bookText.style.cssText = 'font-size:' + e.target.value + 'px !important')
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

const lineHeight = parseInt(window.getComputedStyle(bookText).getPropertyValue("line-height"));
const height = bookText.getBoundingClientRect().height;
const numberOfLines = Math.round(height / lineHeight);