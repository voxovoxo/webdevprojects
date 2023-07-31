
var swiper = new Swiper(".swiper" , {
    slidesPerView: 3,
    spaceBetween: 35,
    autoplay:true,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        1050: {
            slidesPerView: 3,
        },
    },
  });

  var swiper = new Swiper(".myswiper" , {
    slidesPerView: 2,
    spaceBetween: 25,
    autoplay:true,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
    breakpoints:{
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        1610:{
          slidesPerView:2,
        }
    },
  });

  const hamburger = document.getElementById('hamburger');
  const navul = document.getElementById('nav-ul');

  hamburger.addEventListener('click', ()=>{
    navul.classList.toggle('show');
  })
