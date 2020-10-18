'use strict';

(function () {

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

  var setupTopDefaultCoords = setupWindow.style.top;
  var setupLeftDefaultCoords = setupWindow.style.left;


  var inputUserName = document.querySelector("input[name=username]");

  openWindow.addEventListener("click", function () {
    openPopup();
    setupWindow.style.top = setupTopDefaultCoords;
    setupWindow.style.left = setupLeftDefaultCoords;
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

  // Перетаскивание окна

  var dialogHandle = setupWindow.querySelector(".upload");

  dialogHandle.addEventListener("mousedown", function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupWindow.style.top = (setupWindow.offsetTop - shift.y) + "px";
      setupWindow.style.left = (setupWindow.offsetLeft - shift.x) + "px";
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function(clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener("click", onClickPreventDefault);
        };
        dialogHandle.addEventListener("click", onClickPreventDefault);
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });
})();

