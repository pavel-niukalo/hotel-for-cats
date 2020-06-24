'use strict';

(function () {
  let templateSuccess = document.querySelector('#success')
    .content
    .querySelector('.success');

  let background = document.querySelector('.background__page');

  let showMessage = function () {
    let success = templateSuccess.cloneNode(true);

    let onSuccessEscPress = function (evt) {
      window.util.isEscapeEvent(evt, closeSuccess);
    };

    let closeSuccess = function () {
      background.classList.remove('background__page--isActive');

      success.remove();
      document.removeEventListener('keydown', onSuccessEscPress);
    };

    document.querySelector('main')
    .append(success);

    success.querySelector('.success__close')
    .addEventListener('click', function () {
      closeSuccess();
    });

    success.querySelector('.success__button')
    .addEventListener('click', function () {
      closeSuccess();
    });

    document.addEventListener('keydown', onSuccessEscPress);

    document.addEventListener('click', function () {
      closeSuccess();
    });
  };

  window.success = {
    showMessage: showMessage
  };
})();
