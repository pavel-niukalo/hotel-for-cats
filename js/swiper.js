const sliderRooms = document.querySelector('.swiper-container-rooms');
const sliderReviews = document.querySelector('.swiper-container-reviews');

let mySwiperRooms = new Swiper(sliderRooms, {
  slidesPerView: 1,
  grabCursor: true,
  centeredSlides: true,

  pagination: {
    el: '.rooms__pagination',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next-rooms',
    prevEl: '.swiper-button-prev-rooms',
  },
})

let mySwiperReviews = new Swiper(sliderReviews, {
  slidesPerView: 1,
  centeredSlides: true,
  grabCursor: true,

  pagination: {
    el: '.reviews__pagination',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next-reviews',
    prevEl: '.swiper-button-prev-reviews',
  },
})
