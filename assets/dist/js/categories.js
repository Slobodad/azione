$(document).ready(function () {
    // Slider crossSell
    var crossSellSlider = new Swiper('.swiperNovelty', {
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

    // Popup

    var openPopup = $('.js-open-popup');
    var closePopup = $('.js-close-popup');
    var popupBody = $('.sorting__list');
    var popupItem = $('.sorting__item');


    openPopup.on('click',function(){
        popupBody.addClass('sorting__list--active');
    });

    closePopup.on('click',function(){
        popupBody.removeClass('sorting__list--active');
    });

    popupItem.on('click',function(){
        popupItem.removeClass('sorting__item--active');
        $(this).addClass('sorting__item--active');
        popupBody.removeClass('sorting__list--active');
    });

});