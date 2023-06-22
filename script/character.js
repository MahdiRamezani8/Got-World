import { $, getClass, getId } from "./mainScript.js";

const characterInfo = JSON.parse(new URLSearchParams(location.search).get('info'))

const characterName = getId('name')
const characterFatherName = getId('father-name')
const characterFamily = getId('family')
const description = getId('description')
const houseFlag = getId('houseFlag')

characterName.innerHTML = characterInfo.name
characterFatherName.innerHTML = characterInfo.fatherNmae
characterFamily.innerHTML = characterInfo.family
description.innerHTML += " ( " + characterInfo.name + " " + characterInfo.family + " ) " 
houseFlag.src = characterInfo.familyImgAddress