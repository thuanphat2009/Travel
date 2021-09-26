const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const menuBtn = $('.header-menu-icon')
const menuClose = $('.menu-slide-heading-icon')
const menu = $('.menu-slide')
const btnSlide =$$('.countdown-right-tab')
const slideImg = $$('.countdown-right-tab-item')


var i = 0 ;
if(btnSlide[i].classList.contains('active') )
{
    setInterval(() => {
        $('.countdown-right-tab.active').classList.remove('active')
        
        btnSlide[i++].classList.add('active')
       
        if(i >= btnSlide.length){
            i = 0;
        }
        
    }, 3000);

    
}
var y = 0;
if(slideImg[y].classList.contains('active') )
{
    setInterval(() => {
        $('.countdown-right-tab-item.active').classList.remove('active')
        
        slideImg[y++].classList.add('active')
       
        if(y >= slideImg.length){
            y = 0;
        }
        
    }, 3000);

    
}

      
  


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

