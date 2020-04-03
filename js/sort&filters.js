'use strict';

(function () {
  var filters = document.querySelector('.filters__form-wrapper');
  var filtersOpen = document.querySelector('.filters__open');
  var filtersClose = document.querySelector('.filters__close');
  var select = document.querySelector('.select');
  var selectCurrent = select.querySelector('.select__current');
  var selectItem = select.querySelectorAll('.select__item');

  var openFilter = function () {
    var background = document.createElement('div');
    background.style = 'position: absolute; width: 100vw; height: 100vh; background: rgba(255, 254, 253, 0.8); backdrop-filter: blur(8px); z-index: 15';
    document.body.insertAdjacentElement('afterbegin', background);

    filters.classList.add('filters__form-wrapper--opened');

    filtersOpen.removeEventListener('click', function() {
      openFilter();
    });
  };

  var closeFilter = function () {
    background.remove;

    filters.classList.remove('filters__form-wrapper--opened');

    filtersClose.removeEventListener('click', function() {
      closeFilter();
    });
  };

  var chooseItem = function (item) {
    var itemText = item.innerHTML;
    selectCurrent.innerHTML = itemText;
    item.removeEventListener('click', function() {
      chooseItem(item);
    });
  };

  filtersOpen.addEventListener('click', function() {
    openFilter();
  });

  filtersClose.addEventListener('click', function() {
    closeFilter();
  });

  select.addEventListener('click', function() {
    select.classList.toggle('select--opened');
    if (select.classList.contains('select--opened')) {
      select.style = 'border-radius: 4px;'
    } else {
      select.style = 'border-radius: 25px;'
    }
  });

  selectItem.forEach(function (item) {
    item.addEventListener('click', function() {
      chooseItem(item);
    });
  });
})();
