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

// function softScroll (pageNick) {
//     $('.' + pageNick + ' a[href*="#"]')
//     .not('[href="#"]')
//     .not('[href="#0"]')
//     .click(function (event) {
//         if (
//             location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
//             location.hostname == this.hostname
//         ) {
//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//             if (target.length) {
//                 event.preventDefault();
//                 $('html, body').animate({
//                     scrollTop: target.offset().top
//                 }, 500, function () {});
//             }
//         }
//     });
// };


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


document.getElementById('scroll-arrow').addEventListener('click',()=>{
    pageScroll()
})
