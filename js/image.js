'use strict';

(function () {
  var checkedImg = document.querySelector('.gallery__checkImg');
  var gallery = document.querySelectorAll('.gallery__img');

  var checkImage = function (item) {
    var itemSrc = item.src;
    var checkedImgSrc = checkedImg.src;

    checkedImg.src = itemSrc;
    item.src = checkedImgSrc;
  };

  gallery.forEach(function (item) {
    item.addEventListener('click', function() {
      checkImage(item);
    });
  });
})();
