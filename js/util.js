'use strict';

(function () {
  let Key = {
    ENTER: 'Enter',
    ESCAPE: 'Escape'
  };

  let isEnterEvent = function (evt, action) {
    if (evt.key === Key.ENTER) {
      action();
    }
  };

  let isEscapeEvent = function (evt, action) {
    if (evt.key === Key.ESCAPE) {
      action();
    }
  };

  window.util = {
    isEnterEvent: isEnterEvent,
    isEscapeEvent: isEscapeEvent
  };
})();
