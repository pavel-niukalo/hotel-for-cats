'use strict';

(function () {
  var select = document.querySelector('.select');

  select.addEventListener('click', function() {
    select.classList.toggle('select--opened');
  });
})();
