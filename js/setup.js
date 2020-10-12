'use strict';

// module4-task1 start

var setupWindow = document.querySelector(".setup");
var openWindow = document.querySelector(".setup-open");
var closeWindow = setupWindow.querySelector(".setup-close");
var userNameInput = document.querySelector(".setup-user-name");

// Валидация формы

userNameInput.addEventListener("invalid", function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity("Имя должно состоять минимум из 2-х символов");   
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

// Открытие и закрытие формы

var inputUserName = document.querySelector("input[name=username]");

openWindow.addEventListener("click", function () {
  openPopup();
});

closeWindow.addEventListener("click", function () {
  closePopup();
});

openWindow.addEventListener("keydown", function (evt) {
  if (evt.key === "Enter") {
    openPopup();
  }
});

closeWindow.addEventListener("keydown", function (evt) {
  if (evt.key === "Enter") {
    closePopup();
  }
});

var openPopup = function () {
  setupWindow.classList.remove("hidden");

  document.addEventListener("keydown", onPopupEscPress);
};

var closePopup = function () {
  setupWindow.classList.add("hidden");

  document.removeEventListener("keydown", onPopupEscPress);
};

var onPopupEscPress = function (evt) {
  if ((inputUserName != document.activeElement) && (evt.key === 'Escape')) {
    evt.preventDefault();
    setupWindow.classList.add("hidden");
  }
};

// Изменение цвета мантии персонажа по нажатию

var setupWizard = document.querySelector(".setup-wizard");
var wizardCoat = setupWizard.querySelector(".wizard-coat");
var wizardEyes = setupWizard.querySelector(".wizard-eyes");
var wizardFireball = document.querySelector(".setup-fireball-wrap");
var WIZARD_FIREBALL_COLORS = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];
var inputCoatColor = document.querySelector("input[name=coat-color]");
var inputEyesColor = document.querySelector("input[name=eyes-color]");
var inputFireballColor = document.querySelector("input[name=fireball-color]");


var getColorCoat = function () {
  var randomColor = COAT_COLORS[getRandomInt(0, COAT_COLORS.length - 1)];
  wizardCoat.style.fill = randomColor;
  inputCoatColor.value = randomColor;
};

var getColorEyes = function () {
  var randomColor = EYES_COLORS[getRandomInt(0, EYES_COLORS.length - 1)];
  wizardEyes.style.fill = randomColor;
  inputEyesColor.value = randomColor;
};

var getColorFireball = function () {
  var randomColor = WIZARD_FIREBALL_COLORS[getRandomInt(0, WIZARD_FIREBALL_COLORS.length - 1)];
  wizardFireball.style.backgroundColor = randomColor;
  inputFireballColor.value = randomColor;
};

wizardCoat.addEventListener("click", function () {
  getColorCoat();
});

wizardEyes.addEventListener("click", function () {
  getColorEyes();
});

wizardFireball.addEventListener("click", function () {
  getColorFireball();
});

// Настройки персонажа

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var NUMBER_OF_WIZARD = 4;

document.querySelector(".setup-similar").classList.remove("hidden");

var similarListElement = document.querySelector(".setup-similar-list");
var similarWizardTemplate = document.querySelector("#similar-wizard-template")
    .content
    .querySelector(".setup-similar-item");

var WIZARD_NAMES = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];

var WIZARD_SURNAMES = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];

var COAT_COLORS = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];

var EYES_COLORS = ["black", "red", "blue", "yellow", "green"];

var getWizard = function () {
  return {
    name: WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length - 1)],
    surname: WIZARD_SURNAMES[getRandomInt(0, WIZARD_SURNAMES.length - 1)],
    coatColor: COAT_COLORS[getRandomInt(0, COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandomInt(0, EYES_COLORS.length - 1)]
  };
};

var getWizards = function (number) {
  var wizards = [];
  for (var i = 0; i < number; i++) {
    wizards[i] = getWizard();
  }
  return wizards;
};

var wizards = getWizards(NUMBER_OF_WIZARD);

var getWizardRandom = function() {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(".setup-similar-label").textContent = wizards[i].name + " " + wizards[i].surname;
  wizardElement.querySelector(".wizard-coat").style.fill = wizards[i].coatColor;
  wizardElement.querySelector(".wizard-eyes").style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
};

for (var i = 0; i < WIZARD_NAMES.length; i++) {
  getWizardRandom();
};


