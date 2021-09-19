const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const menuBtn = $('.header-menu-icon')
const menuClose = $('.menu-slide-heading-icon')
const menu = $('.menu-slide')
const btnSlide =$$('.countdown-right-tab')
const slideImg = $$('.countdown-right-tab-item')
console.log(btnSlide)

menuBtn.onclick = function(){
    menu.classList.add('active')
}

menuClose.onclick = function(){
    menu.classList.remove('active')
}

btnSlide.forEach(function(value,index){
    value[index] = slideImg[index]
    value.onclick = function(){
        $('.countdown-right-tab.active').classList.remove('active')
        $('.countdown-right-tab-item.active').classList.remove('active')
        this.classList.add('active')
        slideImg[index].classList.add('active')
    }
})