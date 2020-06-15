'use strict';

(function () {
  let pageHeader = document.querySelector('.page-header');
  let pageHeaderButton = pageHeader.querySelector('.page-header__button');
  let mainNav = pageHeader.querySelector('.main-nav');
  let mainNavLinks = mainNav.querySelectorAll('.main-nav__link');

  pageHeader.classList.remove('page-header--nojs');
  mainNav.classList.remove('main-nav--nojs');
  mainNav.classList.add('main-nav--closed');
  window.scrollTo(0, 0);

  let openNav = function() {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    pageHeader.classList.add('page-header--opened');
  };

  let closeNav = function() {
    mainNav.classList.remove('main-nav--opened');
    pageHeader.classList.remove('page-header--opened');
    mainNav.classList.add('main-nav--closed');
  };

  pageHeaderButton.addEventListener('click', function() {
    if (pageHeaderButton.classList.contains('opened')) {
      pageHeaderButton.classList.remove('opened');
      closeNav();
    } else {
      pageHeaderButton.classList.add('opened');
      openNav();
    }
  });

  mainNavLinks.forEach(function (item) {
    item.addEventListener('click', function() {
      pageHeaderButton.classList.remove('opened');
      closeNav();
    });
  });
})();
