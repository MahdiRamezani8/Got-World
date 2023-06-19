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

function pageScroll() {
    let i = window.scrollY;
    let scrollinterval = setInterval(()=>{
        window.scrollTo(0,i)
        i++;
    },2)
    setTimeout(() => {
        clearInterval(scrollinterval,)
    },600)
}


document.getElementById('scroll-arrow').addEventListener('click', pageScroll)

const characters = [
    {id: 1, name: "john snow", family: "stark"},
    {id: 2, name: "tyrion lanister", family: "lanister"},
    {id: 3, name: "daenerys targaryen", family: "targaryen"},
    {id: 4, name: "jaime lanister", family: "lanister"},
    {id: 5, name: "arya stark", family: "stark"},
    {id: 6, name: "cersie lanister", family: "lanister"},
    {id: 7, name: "robb stark", family: "stark"},
    {id: 8, name: "sansa stark", family: "stark"}
]