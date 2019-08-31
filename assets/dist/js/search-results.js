$(document).ready(function () {
    // Popup

    var openPopup = $('.js-open-popup');
    var closePopup = $('.js-close-popup');
    var popupBody = $('.results__list');
    var popupItem = $('.results__item');


    openPopup.on('click',function(){
        popupBody.addClass('results__list--active');
    });

    closePopup.on('click',function(){
        popupBody.removeClass('results__list--active');
    });

    popupItem.on('click',function(){
        popupItem.removeClass('results__item--active');
        $(this).addClass('results__item--active');
        popupBody.removeClass('results__list--active');
    });
});