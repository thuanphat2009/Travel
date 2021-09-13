const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const menuBtn = $('.header-menu-icon')
const menuClose = $('.menu-slide-heading-icon')
const menu = $('.menu-slide')
console.log(menuBtn)

menuBtn.onclick = function(){
    menu.classList.add('active')
}

menuClose.onclick = function(){
    menu.classList.remove('active')
}