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

var countDownDate = new Date("Sep 20, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  $('.countdown-right-item-day').innerHTML = days
  $('.countdown-right-item-hours').innerHTML = hours
  $('.countdown-right-item-minutes').innerHTML = minutes
  $('.countdown-right-item-seconds').innerHTML = seconds
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    $('.countdown-right-item-day').innerHTML = '000'
    $('.countdown-right-item-hours').innerHTML = '00'
    $('.countdown-right-item-minutes').innerHTML = '00'
    $('.countdown-right-item-seconds').innerHTML = '00'
  }
}, 1000);