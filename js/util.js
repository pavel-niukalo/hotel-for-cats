'use strict';

(function () {
  var Key = {
    ENTER: 'Enter',
    ESCAPE: 'Escape'
  };

  var isEnterEvent = function (evt, action) {
    if (evt.key === Key.ENTER) {
      action();
    }
  };

  var isEscapeEvent = function (evt, action) {
    if (evt.key === Key.ESCAPE) {
      action();
    }
  };

  window.util = {
    isEnterEvent: isEnterEvent,
    isEscapeEvent: isEscapeEvent
  };
})();
