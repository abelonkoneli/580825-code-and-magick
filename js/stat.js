'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var MIN_OPACITY = 0.1;
var BOTTOM_GAP = 20;
var TEXT_HEIGHT = 16;
var barHeight = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
    
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
 
  var maxTime = getMaxElement(times);
    
  for (var i = 0; i < players.length; i++) {
      if (players[i] === 'Вы') {
         ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
          ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random() * (1-MIN_OPACITY) + MIN_OPACITY) + ')';
      }
      ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - BOTTOM_GAP - (barHeight * times[i]) / maxTime, BAR_WIDTH, (barHeight * times[i]) / maxTime);
      ctx.fillStyle = '#000';
      ctx.font = '16px PT Mono';
      ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT);
      ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - BOTTOM_GAP - GAP - (barHeight * times[i]) / maxTime);
  }
    ctx.fillText('Ура вы победили!', CLOUD_X + BAR_GAP, BAR_GAP - TEXT_HEIGHT);
    ctx.fillText('Список результатов:', CLOUD_X + BAR_GAP, BAR_GAP);
};
