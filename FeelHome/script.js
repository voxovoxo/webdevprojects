
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
        950: {
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
        },
        950: {
            slidesPerView: 2,
        },
    },
  });