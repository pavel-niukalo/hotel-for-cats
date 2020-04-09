'use strict';

(function () {
  var templateBooking = document.querySelector('#booking')
    .content
    .querySelector('.booking');

  var background = document.querySelector('.background__page');
  var bookingLinks = document.querySelectorAll('.booking__link');

  var openBooking = function () {
    background.classList.add('background__page--isActive');

    var booking = templateBooking.cloneNode(true);

    document.querySelector('main')
    .append(booking);

    var onBookingEscPress = function (evt) {
      window.util.isEscapeEvent(evt, closeBooking);
    };

    var closeBooking = function () {
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

      closeBooking();

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
