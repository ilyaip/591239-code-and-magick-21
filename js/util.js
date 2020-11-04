'use strict';

(function () {
  const getRandomElement = function (array) {
    const randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  const createErrorMessage = function (message) {
    let node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = message;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.utils = {
    getRandomElement: getRandomElement,
    createErrorMessage: createErrorMessage,
  };
})();

