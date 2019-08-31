$(document).ready(function () {

    // timer
    $(document).ready(function () {
        $(".eTimer").eTimer({
            etType: 21,
            etDate: "11.07.2019.23.2",
            etSep: " ",
            etNumberFontFamily: 'Roboto-Light',
            etNumberSize: 12,
            etNumberPaddingTB: 0,
            etNumberPaddingLR: 0,
            etNumberColor: "#4d4d4d",
        });
    });

    // Slider
    var internalSwiper = undefined;
    function initInternalSwiper() {
        var screenWidth = $(window).width();
        if (screenWidth < 1024 && internalSwiper == undefined) {
            internalSwiper = new Swiper('.swiperOffer', {
                breakpointsInverse: true,
                slidesPerView: 2,
                spaceBetween: 15,
                breakpoints: {
                    767: {
                        loop: true,
                        slidesPerView: 3,
                        spaceBetween: 28,
                    },
                }
            });
        } else if (screenWidth > 1023 && internalSwiper != undefined) {
            internalSwiper.destroy();
            internalSwiper = undefined;
            $('.swiperOffer .swiper-wrapper').removeAttr('style');
            $('.swiperOffer .swiper-slide').removeAttr('style');
        }
    }

    initInternalSwiper();
    $(window).on('resize', function () {
        initInternalSwiper();
    });
});