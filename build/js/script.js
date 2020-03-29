(function () {
  var temperature = document.querySelector('.basic-functions__item--temperature');
  var temperatureImage = document.querySelector('.basiс-functions__temperature-image-box');
  var modes = document.querySelector('.basic-functions__item--modes');
  var modesImage = document.querySelector('.basiс-functions__modes-image-box');
  var flow = document.querySelector('.basic-functions__item--flow');
  var flowImage = document.querySelector('.basiс-functions__flow-image-box');
  var timer = document.querySelector('.basic-functions__item--timer');
  var timerImage = document.querySelector('.basiс-functions__timer-image-box');

  var onTemperatureHover = function () {
    temperatureImage.classList.add('js--big');
  }

  var onTemperatureLeave = function () {
    temperatureImage.classList.remove('js--big');
  }

  var onModesHover = function () {
    modesImage.classList.add('js--big');
  }

  var onModesLeave = function () {
    modesImage.classList.remove('js--big');
  }

  var onFlowHover = function () {
    flowImage.classList.add('js--big');
  }

  var onFlowLeave = function () {
    flowImage.classList.remove('js--big');
  }

  var onTimerHover = function () {
    timerImage.classList.add('js--big');
  }

  var onTimerLeave = function () {
    timerImage.classList.remove('js--big');
  }

  temperature.addEventListener('mouseover', onTemperatureHover);
  temperature.addEventListener('mouseleave', onTemperatureLeave);
  modes.addEventListener('mouseover', onModesHover);
  modes.addEventListener('mouseleave', onModesLeave);
  flow.addEventListener('mouseover', onFlowHover);
  flow.addEventListener('mouseleave', onFlowLeave);
  timer.addEventListener('mouseover', onTimerHover);
  timer.addEventListener('mouseleave', onTimerLeave);
})();

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

(function () {
  let scrollDownLink = document.querySelector(`.js-scroll-down`);

  let handleAnchorClick = function () {
    event.preventDefault();
    let linkTarget = event.currentTarget.getAttribute(`href`);
    let id = linkTarget.substring(1, linkTarget.length);
    let aim = document.getElementById(id);
    aim.scrollIntoView({block: `start`, behavior: `smooth`});
  };

  if (scrollDownLink) {
    scrollDownLink.addEventListener(`click`, handleAnchorClick);
  }
})();
