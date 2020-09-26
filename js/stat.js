'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 250;
const BAR_GAP = 50;
const BAR_WIDTH = 40;
const barHeight = 150;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, "rgba(0, 0, 0, 0.7)");
  renderCloud(ctx, CLOUD_X, CLOUD_Y, "#fff");

  ctx.fillStyle = "#000";
  ctx.font = "16px PT Mono";
  ctx.fillText("Ура вы победили!", 140, 40);
  ctx.fillText("Список результатов:", 140, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var randomColor = getRandomInt(100);
    if (players[i] === "Вы") {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
    } else {
      ctx.fillStyle = `hsl(240, ${randomColor}%, 30%)`;
    }
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, FONT_GAP - GAP, BAR_WIDTH, -(barHeight * times[i]) / maxTime);
    ctx.fillStyle = "#000";
    ctx.fillText(players[i], CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + FONT_GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - (barHeight * times[i]) / maxTime - BAR_WIDTH);
  }
};
