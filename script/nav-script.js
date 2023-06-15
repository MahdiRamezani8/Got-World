const openMenuButton = document.querySelector('#open-menu')
const burgerMenu = document.querySelector('#menu-ul')
const menuItems = document.querySelectorAll('li')
openMenuButton.addEventListener('click', e => {
    (e.target.className == "fa fa-navicon") ? e.target.className = "fa fa-close": e.target.className = "fa fa-navicon"
    burgerMenu.classList.toggle('active')
})
menuItems.forEach(element => element.addEventListener('click', () => setTimeout(() => {
    burgerMenu.classList.remove('active')
    openMenuButton.className = "fa fa-navicon"
}, 200)))