const projectSwiper = new Swiper('.project-section__swiper', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.project-section__swiper-navigation-btn-right',
    prevEl: '.project-section__swiper-navigation-btn-left',
  },
});
