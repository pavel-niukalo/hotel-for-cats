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

    // var bookingSubmit = document.querySelector('.booking__submit');

    // var closeBooking = function () {
    //   background.classList.remove('background__page--isActive');

    //   booking.remove();
    // };
  };

  bookingLinks.forEach(function (item) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();

      openBooking();
      window.scrollTo(0, 0);
    });
  });
})();
