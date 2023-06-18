const $ = document;
const getId = id => $.getElementById(id)
const getClass = classE => $.getElementById(classE)

const searchInput = getId('search-input')
window.addEventListener('load', searchInputPlaceholder)
window.addEventListener('resize', searchInputPlaceholder)
function searchInputPlaceholder(){
    if (window.innerWidth < 375) {
        searchInput.placeholder = "درباره چی میخوای بدونی؟"
    }
}