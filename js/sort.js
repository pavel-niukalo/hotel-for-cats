'use strict';

(function () {
  let select = document.querySelector('.select');
  let selectCurrent = select.querySelector('.select__current');
  let selectItem = select.querySelectorAll('.select__item');

  let chooseItem = function (item) {
    let itemText = item.innerHTML;
    selectCurrent.innerHTML = itemText;
    item.removeEventListener('click', function() {
      chooseItem(item);
    });
  };

  select.addEventListener('click', function() {
    select.classList.toggle('select--opened');
    if (select.classList.contains('select--opened')) {
      select.style = 'border-radius: 4px;';
    } else {
      select.style = 'border-radius: 25px;';
    }
  });

  selectItem.forEach(function (item) {
    item.addEventListener('click', function() {
      chooseItem(item);
    });
  });
})();
