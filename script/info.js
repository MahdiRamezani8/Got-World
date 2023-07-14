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
const characterhouse = getClass('.house')
const characterName = getClass('.name')
const siteTitle = getTag('title')
let infoTitleElement = ''
let infoElement = ''

for (const key in characterInfo) {
    infoTitleElement += `<li> ${key}</li>`;
    infoElement += `<li> ${characterInfo[key]} </li>`;
}

infoDesc.insertAdjacentHTML('beforeend', infoElement)
infoTitle.insertAdjacentHTML('beforeend', infoTitleElement)
characterProfile.style.backgroundImage = `url('${characterInfo.imgAddress}')`
characterName.forEach(element => element.innerHTML = characterInfo.name)
characterhouse.forEach(element => element.innerHTML = characterInfo.family)
siteTitle.innerHTML = `${characterInfo.name}  ${characterInfo.family}`