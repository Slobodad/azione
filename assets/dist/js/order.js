$(document).ready(function () { 

    var basketSlider = new Swiper('.order-list', {
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

    // Tab
    var newClientTop = $('.js-new-client-top');
    var newClientBottom = $('.js-new-client-bottom');
    var oldClientTop = $('.js-old-client-top');
    var oldClientbottom = $('.js-old-client-bottom');
    var btnNext = $('.js-next');
    var btnLogin = $('.js-login');
    var regBox = $('.js-reg-box');
    var loginBox = $('.js-log-box');
    var deliveryBox = $('.js-delivery-box');
    var newClientDesctop = $('.js-new-client-desctop');
    var oldClientDesctop = $('.js-old-client-desctop');


    var sendOrder = $('.send-order');

    oldClientDesctop.on('click', function(){
        oldClientDesctop.addClass('client-active');
        newClientDesctop.removeClass('client-active');
        loginBox.addClass('content-active');
        regBox.removeClass('content-active');
        deliveryBox.removeClass('content-active');
    });

    newClientDesctop.on('click', function(){
        oldClientDesctop.removeClass('client-active');
        newClientDesctop.addClass('client-active');
        loginBox.removeClass('content-active');
        regBox.addClass('content-active');
        deliveryBox.removeClass('content-active');
    });

    oldClientbottom.on('click', function(){
        oldClientTop.addClass('client-active');
        newClientTop.removeClass('client-active');
        oldClientbottom.removeClass('client-active');
        newClientBottom.addClass('client-active');
        loginBox.addClass('content-active');
        regBox.removeClass('content-active');
        deliveryBox.removeClass('content-active');
    });

    newClientBottom.on('click', function(){
        oldClientTop.removeClass('client-active');
        newClientTop.addClass('client-active');
        oldClientbottom.addClass('client-active');
        newClientBottom.removeClass('client-active');
        loginBox.removeClass('content-active');
        regBox.addClass('content-active');
        deliveryBox.removeClass('content-active');
    });

    btnNext.on('click', function(){
        event.preventDefault();
        oldClientTop.removeClass('client-active');
        newClientTop.addClass('client-active');
        oldClientbottom.removeClass('client-active');
        newClientBottom.removeClass('client-active');
        loginBox.removeClass('content-active');
        regBox.removeClass('content-active');
        deliveryBox.addClass('content-active');
    });

    btnLogin.on('click', function(){
        event.preventDefault();
        oldClientTop.addClass('client-active');
        newClientTop.removeClass('client-active');
        oldClientbottom.removeClass('client-active');
        newClientBottom.removeClass('client-active');
        loginBox.removeClass('content-active');
        deliveryBox.addClass('content-active');
        regBox.removeClass('content-active');
    });

    sendOrder.on('click', function(){
        event.preventDefault();
    });


});