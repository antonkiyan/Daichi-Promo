(function () {
  var box = document.querySelector('.questions ul');
  var inputs = document.querySelectorAll('.questions input');
  var labels = document.querySelectorAll('.questions label');
  var title = document.querySelector('.questions__title');

  var idx = -1;

  var scroll = function (target) {
    return function () {
      target.scrollIntoView({block: `start`, behavior: `smooth`});
    }
  }

  var clearInputs = function () {
    inputs.forEach(function (input) {
      if (input.checked) {
        input.checked = false;
      }
    })
  }

  var onBoxClick = function (evt) {
    var target = evt.target;

    if (target.tagName.toLowerCase() === 'label') {

      var num = +target.getAttribute('for').split('-')[1] - 1;

      if (num !== idx) {
        clearInputs();
        idx = num;
      }
    }

    if (target.tagName.toLowerCase() === 'input') {

      var num = +target.getAttribute('id').split('-')[1] - 1;

      setTimeout(scroll(labels[num]), 200);
    }
  }

  box.addEventListener('click', onBoxClick);
})();
