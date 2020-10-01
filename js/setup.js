'use strict';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var userDialog = document.querySelector(".setup");
userDialog.classList.remove("hidden");

document.querySelector(".setup-similar").classList.remove("hidden");

var similarListElement = document.querySelector(".setup-similar-list");
var similarWizardTemplate = document.querySelector("#similar-wizard-template")
    .content
    .querySelector(".setup-similar-item");

var WIZARD_NAMES = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];

var WIZARD_SURNAMES = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];

var COAT_COLORS = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];

var EYES_COLORS = ["black", "red", "blue", "yellow", "green"];

var wizards = [
  {
    name: WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length - 1)],
    surname: WIZARD_SURNAMES[getRandomInt(0, WIZARD_SURNAMES.length - 1)],
    coatColor: COAT_COLORS[getRandomInt(0, COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandomInt(0, EYES_COLORS.length - 1)]
  },
  {
    name: WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length - 1)],
    surname: WIZARD_SURNAMES[getRandomInt(0, WIZARD_SURNAMES.length - 1)],
    coatColor: COAT_COLORS[getRandomInt(0, COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandomInt(0, EYES_COLORS.length - 1)]
  },
  {
    name: WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length - 1)],
    surname: WIZARD_SURNAMES[getRandomInt(0, WIZARD_SURNAMES.length - 1)],
    coatColor: COAT_COLORS[getRandomInt(0, COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandomInt(0, EYES_COLORS.length - 1)]
  },
  {
    name: WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length - 1)],
    surname: WIZARD_SURNAMES[getRandomInt(0, WIZARD_SURNAMES.length - 1)],
    coatColor: COAT_COLORS[getRandomInt(0, COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandomInt(0, EYES_COLORS.length - 1)]
  }
];

for (var i = 0; i < WIZARD_NAMES.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(".setup-similar-label").textContent = wizards[i].name + " " + wizards[i].surname;
  wizardElement.querySelector(".wizard-coat").style.fill = wizards[i].coatColor;
  wizardElement.querySelector(".wizard-eyes").style.fill = wizards[i].eyesColor;
  
  similarListElement.appendChild(wizardElement);
}