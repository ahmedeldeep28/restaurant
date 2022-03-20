

//Scroll add Nav properties
let nabBar = document.getElementById("nav-bar");

const navActive = ()=>{
  if(window.pageYOffset > 100){
    nabBar.classList.add("active")
  }else{
    nabBar.classList.remove("active")
  }
}
navActive()
window.onscroll = ()=>{navActive()}



//itemBar
let btnItem = document.querySelector(".item"),
 itemBar = document.querySelector(".item-bar"),
 close = document.querySelector(".remove");

 //click get itemBar
 btnItem.onclick = ()=>{
  itemBar.classList.add("active")
 }
 //click remove itemBar
 close.onclick = ()=>{
  itemBar.classList.remove("active")
 }

 //slider header
var swiper = new Swiper('header .swiper-container', {
  autoplay:{
    delay: 10000,
  },
  lazy: true,
  loop:true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});
//slider chef
var swiper = new Swiper('.team .swiper-container', {
  slidesPerView: 1,
  freeMode: true,
  spaceBetween: 30,
  lazy: true,
  autoplay:{
    delay: 5000,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

});

var swiper = new Swiper('.testimonial .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 100,
  autoplay:{
    delay: 5000,
  },
  loop: true,

  keyboard: {
    enabled: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});
