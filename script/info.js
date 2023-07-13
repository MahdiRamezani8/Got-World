import {
    $,
    getClass,
    getId,
    getTag
} from "./mainScript.js";

const characterInfo = JSON.parse(new URLSearchParams(location.search).get('info'));

const infoTitle = getId('info-title')
const infoDesc = getId('info')
const characterProfile = getId('profile')
characterProfile.style.backgroundImage = `url('${characterInfo.imgAddress}')`
let infoTitleElement = ''
let infoElement = ''
for (const key in characterInfo) {
    infoTitleElement += `<li> ${key}</li>`;
    infoElement += `<li> ${characterInfo[key]} </li>`;
}
infoDesc.insertAdjacentHTML('beforeend', infoElement)
infoTitle.insertAdjacentHTML('beforeend', infoTitleElement)

const characterName = getClass('.name')
characterName.forEach(element => element.innerHTML = characterInfo.name)
const characterhouse = getClass('.house')
characterhouse.forEach(element => element.innerHTML = characterInfo.family)