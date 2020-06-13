'use strict';

(function () {
  var pageHeader = document.querySelector('.page-header');
  var mainNav = pageHeader.querySelector('.main-nav');
  var mainNavButton = mainNav.querySelector('.main-nav__button');
  var mainNavLinks = mainNav.querySelectorAll('.main-nav__link');

  mainNav.classList.remove('main-nav--nojs');
  mainNav.classList.add('main-nav--closed');

  var openNav = function() {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    pageHeader.classList.add('page-header--opened');
  };

  var closeNav = function() {
    mainNav.classList.remove('main-nav--opened');
    pageHeader.classList.remove('page-header--opened');
    mainNav.classList.add('main-nav--closed');
  };

  mainNavButton.addEventListener('click', function() {
    if (mainNavButton.classList.contains('opened')) {
      mainNavButton.classList.remove('opened');
      closeNav();
    } else {
      mainNavButton.classList.add('opened');
      openNav();
    }
  });

  mainNavLinks.forEach(function (item) {
    item.addEventListener('click', function() {
      mainNavButton.classList.remove('opened');
      closeNav();
    });
  });
})();
