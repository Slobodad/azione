$(document).ready(function () {
    // Accordeon

    var informBtn = $('.js-inform-btn');
    var historyBtn = $('.js-history-btn');
    var bonusBtn = $('.js-bonus-btn');
    var informContent = $('.information-content');
    var historyContent = $('.history-content');
    var bonusContent = $('.bonus-content');

    informBtn.on('click', function(){
        informBtn.addClass('inform-btn-active');
        historyBtn.removeClass('history-btn-active');
        bonusBtn.removeClass('bonus-btn-active');
        informContent.addClass('information-content-active');
        historyContent.removeClass('history-content-active');
        bonusContent.removeClass('bonus-content-active');
    });

    historyBtn.on('click', function(){
        informBtn.removeClass('inform-btn-active');
        historyBtn.addClass('history-btn-active');
        bonusBtn.removeClass('bonus-btn-active');
        historyContent.addClass('history-content-active');
        informContent.removeClass('information-content-active');
        bonusContent.removeClass('bonus-content-active');
        $('html, body').animate({
            scrollTop: informBtn.offset().top
        }, 700);
    });

    bonusBtn.on('click', function(){
        informBtn.removeClass('inform-btn-active');
        historyBtn.removeClass('history-btn-active');
        bonusBtn.addClass('bonus-btn-active');
        bonusContent.addClass('bonus-content-active');
        informContent.removeClass('information-content-active');
        historyContent.removeClass('history-content-active');
        $('html, body').animate({
            scrollTop: informBtn.offset().top
        }, 700);
    })

    // Sorting popup

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

var tabBtn = document.querySelectorAll('.js-tab-item');
var tabContent = document.querySelectorAll('.js-content-item')

for (var i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener('click', function(){
        var curentData = this.dataset.content;
        var curentContent = document.querySelector('#content-' + curentData);

        for (var j = 0; j < tabBtn.length; j++) {
            tabBtn[j].classList.remove('tabs__btn--active')
        }

        for (var k = 0; k < tabContent.length; k++) {
            tabContent[k].classList.remove('content__item--active');
        }

        curentContent.classList.add('content__item--active');
        this.classList.add('tabs__btn--active');
    });
}