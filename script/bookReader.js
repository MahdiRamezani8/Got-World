import {
    $,
    getId,
    getClass,
    getTag
} from "./mainScript.js";

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