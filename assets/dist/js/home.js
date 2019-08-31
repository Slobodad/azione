$(document).ready(function () {
  //сдайдер в баннере
  var playValue = $('.swiperBanner').attr('data-playSpeed');
  var banner = new Swiper('.swiperBanner', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    autoplay: {
      delay: playValue,
    },
  });
  //слайдер Новинки
  var banner = new Swiper('.swiperNovelty', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.sw-button-next',
      prevEl: '.sw-button-prev',
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 28,
        loop: true,
      }
    }
  });

});


