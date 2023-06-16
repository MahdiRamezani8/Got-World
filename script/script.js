const $ = document;
const getId = id => $.getElementById(id)
const getClass = classE => $.getElementById(classE)

// // to comput distance between transparent div and windows top in px
// const transparentTopHandler = () => getId('transparent').style.top = (parseInt(getComputedStyle(getId('background')).getPropertyValue('height')) -50) + 'px';
// window.addEventListener('load', transparentTopHandler)
// window.addEventListener('resize', transparentTopHandler)
const searchInput = getId('search-input')
window.addEventListener('load', searchInputPlaceholder)
window.addEventListener('resize', searchInputPlaceholder)
function searchInputPlaceholder(){
    if (window.innerWidth < 375) {
        searchInput.placeholder = "درباره چی میخوای بدونی؟"
    }
}