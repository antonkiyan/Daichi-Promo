(function () {
  var slider = initPreviewSwiper('.equipment__slider-container');

  function initPreviewSwiper(name) {
    return new Swiper(name, {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      }
    });
  }
})();
