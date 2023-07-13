import { $, getClass, getId, getTag } from "./mainScript.js";

const characterInfo = JSON.parse(new URLSearchParams(location.search).get('info'));

const characterName = getClass('name');
const characterFatherName = getId('father-name');
const characterFamily = getId('family');
const description = getId('description');
const houseFlag = getId('houseFlag');

characterName.textContent = characterInfo.name;
characterFatherName.textContent = characterInfo.fatherNmae;
characterFamily.textContent = characterInfo.family;
description.textContent += ` ( ${characterInfo.name} ${characterInfo.family} ) `;
houseFlag.src = characterInfo.familyImgAddress;
document.getElementsByTagName('title')[0].innerHTML = characterInfo.name