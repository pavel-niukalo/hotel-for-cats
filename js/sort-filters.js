'use strict';

(function () {
  var filters = document.querySelector('.filters__form-wrapper');
  var filtersOpen = document.querySelector('.filters__open');
  var filtersClose = document.querySelector('.filters__close');
  var form = document.querySelector('.form');
  var formSubmit = form.querySelector('.form__submit');
  var formReset = form.querySelector('.form__reset');
  var checkboxes = form.querySelectorAll('.checkbox__input');
  var inputs = form.querySelectorAll('.form__input');
  var select = document.querySelector('.select');
  var selectCurrent = select.querySelector('.select__current');
  var selectItem = select.querySelectorAll('.select__item');

  var background = document.createElement('div');

  var openFilter = function () {
    background.style = 'position: absolute; width: 100vw; height: 4608px; background: rgba(255, 254, 253, 0.8); backdrop-filter: blur(8px); z-index: 15';
    document.body.insertAdjacentElement('afterbegin', background);

    filters.classList.add('filters__form-wrapper--opened');

    filtersOpen.removeEventListener('click', function() {
      openFilter();
    });
  };

  var closeFilter = function () {
    window.scrollTo(0, 0);
    background.remove();

    filters.classList.remove('filters__form-wrapper--opened');

    formSubmit.textContent = 'Подобрать';
    formSubmit.disabled = false;

    filtersClose.removeEventListener('click', function() {
      closeFilter();
    });

    background.removeEventListener('click', function() {
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

  form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    formSubmit.textContent = 'Подбираем...';
    formSubmit.disabled = true;
    // Здесь идет отправка на сервер и после успешной отправки закрываются фильтры
    closeFilter();
  });

  background.addEventListener('click', function() {
    closeFilter();
  });

  formReset.addEventListener('click', function(evt) {
    evt.preventDefault();

    checkboxes.forEach(function (item) {
      item.checked = false;
    });

    inputs.forEach(function (item) {
      item.value = '';
    });
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
