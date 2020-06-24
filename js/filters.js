'use strict';

(function () {
  let filters = document.querySelector('.filters__form-wrapper');
  let filtersOpen = document.querySelector('.filters__open');
  let filtersClose = document.querySelector('.filters__close');
  let form = document.querySelector('.form');
  let formSubmit = form.querySelector('.form__submit');
  let formReset = form.querySelector('.form__reset');
  let checkboxes = form.querySelectorAll('.checkbox__input');
  let inputs = form.querySelectorAll('.form__input');

  let background = document.querySelector('.background__page');

  let openFilter = function () {
    background.classList.add('background__page--isActive');

    filters.classList.add('filters__form-wrapper--opened');

    filtersClose.addEventListener('click', function () {
      closeFilter();
    });

    background.addEventListener('click', function () {
      closeFilter();
    });
  };

  let closeFilter = function () {
    background.classList.remove('background__page--isActive');

    filters.classList.remove('filters__form-wrapper--opened');

    formSubmit.textContent = 'Подобрать';
      formSubmit.disabled = false;
  };

  filtersOpen.addEventListener('click', function () {
    openFilter();
  });

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    formSubmit.textContent = 'Подбираем...';
    formSubmit.disabled = true;
    // Здесь идет отправка на сервер и после успешной отправки закрываются фильтры
    closeFilter();
    window.scrollTo(0, 0);
  });

  formReset.addEventListener('click', function (evt) {
    evt.preventDefault();

    checkboxes.forEach(function (item) {
      item.checked = false;
    });

    inputs.forEach(function (item) {
      item.value = '';
    });
  });
})();
