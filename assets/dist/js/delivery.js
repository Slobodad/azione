// 'Use strict';

// // Tabs

var tabBtn = document.querySelectorAll('.js-tab-item');
var tabContent = document.querySelectorAll('.js-content-item')

for (var i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener('click', function(){
        var curentData = this.dataset.tab;
        var curentContent = document.querySelector('#delivery-' + curentData);

        for (var j = 0; j < tabBtn.length; j++) {
            tabBtn[j].classList.remove('tabs__item--active')
        }

        for (var k = 0; k < tabContent.length; k++) {
            tabContent[k].classList.remove('content__item--active');
        }

        curentContent.classList.add('content__item--active');
        this.classList.add('tabs__item--active');
    });
}