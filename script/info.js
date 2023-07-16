import {
    $,
    getClass,
    getId,
    getTag,
    houses
} from "./mainScript.js";

const info = JSON.parse(new URLSearchParams(location.search).get('info'));

const infoTitle = getId('info-title')
const infoDesc = getId('info')
const profile = getId('profile')
const house = getClass('.house')
const name = getClass('.name')
const siteTitle = getTag('title')
let infoTitleElement = ''
let infoElement = ''

for (const key in info) {
    infoTitleElement += `<li> ${key}</li>`;
    infoElement += `<li> ${info[key]} </li>`;
}

infoDesc.insertAdjacentHTML('beforeend', infoElement)
infoTitle.insertAdjacentHTML('beforeend', infoTitleElement)

profile.style.backgroundImage = `url('${info.imgAddress}')`


if (info.type == 'house') {
    const nameTitle = getId('char-name')
    nameTitle.style.display = 'none'
} else{
    name.forEach(element => element.innerHTML = info.name)
house.forEach(element => element.innerHTML = info.family)
}
siteTitle.innerHTML = `${info.name}  ${info.family}`