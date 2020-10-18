'use strict';

(function () {

  const CLOUD_WIDTH = 420;
  const CLOUD_HEIGHT = 270;
  const CLOUD_X = 100;
  const CLOUD_Y = 10;
  const GAP = 10;
  const FONT_GAP = 250;
  const BAR_GAP = 50;
  const BAR_WIDTH = 40;
  const BAR_HEIGHT = 150;
  const CLOUD_COLOR = "rgba(0, 0, 0, 0.7)";
  const CLOUD_COLOR_BACK = "#fff";
  const TEXT_COLOR = "#000";
  const TEXT_FONT = "16px PT Mono";
  const TEXT_RED = "rgba(255, 0, 0, 1)";
  const MAIN_PLAYER = "Вы";
  const LEFT_MARGIN = 40;

  const renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (array) {
    var maxElement = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] > maxElement) {
        maxElement = array[i];
      }
    }
    return maxElement;
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_COLOR);
    renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR_BACK);

    ctx.fillStyle = TEXT_COLOR;
    ctx.font = TEXT_FONT;
    ctx.fillText("Ура вы победили!", 140, 40);
    ctx.fillText("Список результатов:", 140, 60);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      var randomColor = getRandomInt(100);
      if (players[i] === MAIN_PLAYER) {
        ctx.fillStyle = TEXT_RED;
      } else {
        ctx.fillStyle = `hsl(240, ${randomColor}%, 30%)`;
      }
      ctx.fillRect(CLOUD_X + LEFT_MARGIN + (BAR_WIDTH + BAR_GAP) * i, FONT_GAP - GAP, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
      ctx.fillStyle = TEXT_FONT;
      ctx.fillText(players[i], LEFT_MARGIN + CLOUD_X + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + FONT_GAP);
      ctx.fillText(Math.round(times[i]), LEFT_MARGIN + CLOUD_X + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime - BAR_WIDTH);
    }
  };
})();

