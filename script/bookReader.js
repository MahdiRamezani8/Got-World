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
        if (e.target.id == "change-fontColor") {
            bookTextesContainer.style.color = e.target.value
        } else {
            bookTextesContainer.style.backgroundColor = e.target.value
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