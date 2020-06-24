'use strict';

(function () {
  let templateBooking = document.querySelector('#booking')
    .content
    .querySelector('.booking');

  let background = document.querySelector('.background__page');
  let bookingLinks = document.querySelectorAll('.booking__link');

  let openBooking = function () {
    background.classList.add('background__page--isActive');

    let booking = templateBooking.cloneNode(true);

    document.querySelector('main')
    .append(booking);

    let onBookingEscPress = function (evt) {
      window.util.isEscapeEvent(evt, closeBooking);
    };

    let closeBooking = function () {
      background.classList.remove('background__page--isActive');

      booking.remove();

      document.removeEventListener('keydown', onBookingEscPress);
    };

    booking.querySelector('.booking__close')
    .addEventListener('click', function () {
      closeBooking();
    });

    background.addEventListener('click', function () {
      closeBooking();
    });

    document.addEventListener('keydown', onBookingEscPress);

    // Отправка формы
    booking.querySelector('.booking__form')
    .addEventListener('submit', function (evt) {
      evt.preventDefault();

      booking.remove();

      window.success.showMessage();
    })
  };

  bookingLinks.forEach(function (item) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();

      openBooking();
      window.scrollTo(0, 0);
    });
  });
})();
