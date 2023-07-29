console.log("hello world")
 
/* testimonials*/
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  autoplay:true,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      550: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

/*hamburger navbar*/
const hamburger = document.getElementById('hamburger');
const list = document.getElementById('pages');

hamburger.addEventListener('click', ()=>{
  list.classList.toggle('show');
});

