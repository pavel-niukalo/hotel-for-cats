'use strict';

(function () {
  var pageHeader = document.querySelector('.page-header');
  var mainNav = pageHeader.querySelector('.main-nav');
  var mainNavOpen = mainNav.querySelector('.main-nav__open');
  var mainNavClose = mainNav.querySelector('.main-nav__close');
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

  mainNavOpen.addEventListener('click', function() {
    openNav();
  });

  mainNavClose.addEventListener('click', function() {
    closeNav();
  });

  mainNavLinks.forEach(function (item) {
    item.addEventListener('click', function() {
      closeNav();
    });
  });
})();
