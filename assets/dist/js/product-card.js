$(document).ready(function () {
    // Slider product
    var productSlider = new Swiper('.product-swiper', {
        slidesPerView: 4,
        direction: 'vertical',
        mousewheel: {
            releaseOnEdges: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true,
            dragSize: 50,

        },
        breakpoints: {
            1239: {
                loop: true,
                direction: 'horizontal',
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.sw-button-next',
                    prevEl: '.sw-button-prev',
                },
            }
        }
    });

    // Slider item big
    var sliderItem = $('.swiper-slide__link');
    var ItemBigImg = $('.item-big__img');
    var ItemBiglink = $('.item-big__link');

    sliderItem.on('click', function () {
        ItemBigImg.attr("src", $(this).data('src'));
        ItemBiglink.attr("href", $(this).data('src'));
    });

    // Video popup
    var openPopupVideo = $('.vid-img ');
    var videoBox = $('.popup-video__box');
    var videoClose = $('.popup-video__close');
    var videoIframe = $('.popup-video-iframe');

    openPopupVideo.on('click', function () {
        videoBox.addClass('popup-video__box--active');
        videoDataId = $(this).data('video-id');
        videoIframe.attr("src", videoDataId);
    });

    videoClose.on('click', function () {
        videoBox.removeClass('popup-video__box--active');
        videoIframe.attr("src", '');
    });

    videoBox.on('click', function (e) {
        if (e.target.className === 'popup-video__box popup-video__box--active') {
            videoBox.removeClass('popup-video__box--active');
            videoIframe.attr("src", '');
        }
    });


    // Slider crossSell
    var crossSellSlider = new Swiper('.crossSell__swiper', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.sw-button-next',
            prevEl: '.sw-button-prev',
        },
        breakpoints: {
            767: {
                loop: true,
                slidesPerView: 2,
                spaceBetween: 28,
            }
        }
    });

    // Slider viewed
    var viewedSlider = new Swiper('.viewed__swiper', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.sw-button-next',
            prevEl: '.sw-button-prev',
        },
        breakpoints: {
            767: {
                loop: true,
                slidesPerView: 2,
                spaceBetween: 28,
            }
        }
    });

    $('.form__btn').on('click', function () {
        event.preventDefault();
    });

    $('.js-selection').on('click', function(){
        $('.js-selection').removeClass('active');
        $(this).addClass('active');
    });

});

// Volume selection
// var selectBox = document.querySelectorAll('.js-selection');

// for (var i = 0; i < selectBox.length; i++) {
//     selectBox[i].addEventListener('click', function () {
        
//         for (var j = 0; j < selectBox.length; j++) {
//             selectBox[j].classList.remove('active')
//         }

//         this.classList.add('active');
//     });
// }



// Tabs
var tabBtn = document.querySelectorAll('.js-tab__btn');
var tabContent = document.querySelectorAll('.tab__content')

for (var i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener('click', function () {
        var curentData = this.dataset.tab;
        var curentContent = document.querySelector('#tab__' + curentData);

        for (var j = 0; j < tabBtn.length; j++) {
            tabBtn[j].classList.remove('tab__btn--active')
        }

        for (var k = 0; k < tabContent.length; k++) {
            tabContent[k].classList.remove('tab__content--active');
        }

        curentContent.classList.add('tab__content--active');
        this.classList.add('tab__btn--active');
    });
}