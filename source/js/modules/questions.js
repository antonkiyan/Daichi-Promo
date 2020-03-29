(function () {
  var box = document.querySelector('.questions ul');
  var inputs = document.querySelectorAll('.questions input');
  var labels = document.querySelectorAll('.questions label');

  var idx = -1;

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
      var num = +target.getAttribute('for').slice(-1) - 1;

      if (num !== idx) {
        clearInputs();
        idx = num;
      }
    }
  }

  box.addEventListener('click', onBoxClick);
})();
