(function(App) {

  let _quantizeFn = null;
  let _timer = null;

  App.registerQuantizeFn = function(fn) {
    _quantizeFn = fn;
  };

  App.scheduleQuantize = function() {
    clearTimeout(_timer);
    if (_quantizeFn) {
      _timer = setTimeout(_quantizeFn, 500);
    }
  };

})(window.App = window.App || {});
