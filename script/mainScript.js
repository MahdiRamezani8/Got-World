const $ = document;
const getId = id => $.getElementById(id)
const getClass = classE => $.querySelectorAll(classE)

export {$, getId, getClass}