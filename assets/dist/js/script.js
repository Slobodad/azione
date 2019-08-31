$(document).ready(function () {
    //mobile menu
    $('.toggle-menu').on('click', function () {
        $('.header__menu').addClass('show');
        $('body').css('overflow', 'hidden');
    });
    $('.mobileClose').on('click', function () {
        $('.header__menu').removeClass('show');
        $('body').css('overflow', 'auto');
    });

    //end mobile menu
    if (window.innerWidth < 768) {
        $(".sub-menu").each(function (index) {
            $(this).parent().addClass('has-children');
        });

        $('.header__menu li.has-children').on('click', function () {
            if ($(this).children('.sub-menu')) {
                $(this).toggleClass('show-child');
                return false;
            }
        })
    }

    //popups
    const targetElement = $('.overlayPopup');

    $('.open-checkIn').on("click", function () {
        $('.overlay-checkIn').addClass('active');
        $('body').css('overflow', 'hidden');
    });
    $('.overlay-checkIn .closeBtn, .overlay-checkIn .close').on("click", function () {
        $('.overlay-checkIn').removeClass('active');
        $('body').css('overflow', 'auto');
    });

    $('.open-signIn').on("click", function () {
        $('.overlay-signIn').addClass('active');
    });
    $('.overlay-signIn .closeBtn, .overlay-signIn .close').on("click", function () {
        $('.overlay-signIn').removeClass('active');
    });

    //проверка на IOS Safari
    function iOSversion() {

        var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
        var iOS = /iPhone/.test(navigator.userAgent) && !window.MSStream;

        if (isSafari && iOS) {
            $('.overlayPopup').addClass('ios');
            $('.header__menu .wrapper').addClass('ios');
        }
    }
    iOSversion();

    // Basket slider

    var basketSlider = new Swiper('.basket-list', {
        slidesPerView: 2,
        direction: 'vertical',
        mousewheel: {
            releaseOnEdges: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true,
        },
    });

    // basket popup

    var openBasket = $('.js-open-basket');
    var basketBox = $('.basket-popup');
    var basketClose = $('.js-basket-close');

    openBasket.on('click', function () {
        basketBox.addClass('basket-popup-active');
    })

    basketClose.on('click', function () {
        basketBox.removeClass('basket-popup-active');
    })

    basketBox.on('click', function (e) {
        if (e.target.className === 'basket-popup basket-popup-active') {
            basketBox.removeClass('basket-popup-active');
        }

    });
});


