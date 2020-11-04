'use strict';

(function () {
  var inputCoatColor = document.querySelector("input[name=coat-color]");
  var inputEyesColor = document.querySelector("input[name=eyes-color]");

  const COAT_COLORS = [
    'rgb(146, 100, 161)',
    'rgb(215, 210, 55)',
    'rgb(241, 43, 107)',
    'rgb(101, 137, 164)',
    'rgb(0, 0, 0)',
    'rgb(215, 210, 55)',
    'rgb(56, 159, 117)',
    'rgb(241, 43, 107)'
  ];

  const EYES_COLORS = [
    'red',
    'orange',
    'yellow',
    'green',
    'lightblue',
    'blue',
    'purple'
  ];

  let wizard = {
    onEyesChange: function (color) {},
    onCoatChange: function (color) {}
  };

  const wizardElement = document.querySelector('.setup-wizard');

  const wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  wizardCoatElement.addEventListener('click', function () {
    const newColor = window.utils.getRandomElement(COAT_COLORS);
    this.style.fill = newColor;
    inputCoatColor.value = newColor;
    wizard.onCoatChange(newColor);
  });

  const wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  wizardEyesElement.addEventListener('click', function () {
    const newColor = window.utils.getRandomElement(EYES_COLORS);
    this.style.fill = newColor;
    inputEyesColor.value = newColor;
    wizard.onEyesChange(newColor);
  });

  window.wizard = {
    setCoatChangeHandler: function (cb) {
      wizard.onCoatChange = cb;
    },

    setEyesChangeHandler: function (cb) {
      wizard.onEyesChange = cb;
    }
  };
})();

