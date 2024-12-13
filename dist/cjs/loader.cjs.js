'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cde102e8.js');
const patch = require('./patch-29e859fe.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patch.patchEsm().then(() => {
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["g-app_4.cjs",[[1,"g-app",{"devMode":[4,"dev-mode"],"paused":[32],"gameStarted":[32],"score":[32],"lose":[32],"isWon":[32],"showRabbit":[32],"isGameOver":[32],"eggDuration":[32],"eggs":[32],"eggMoveDuration":[32],"isDifficult":[32]},[[4,"eggIsCathced","eggCatchedHandler"]]],[1,"g-egg",{"nest":[1026],"wolfPosition":[1,"wolf-position"],"eggMoveDuration":[2,"egg-move-duration"],"step":[32],"birdIsShown":[32]},[[4,"gamePaused","pauseGame"],[4,"gameOver","deleteTimer"],[4,"gameWon","deleteTimer"],[4,"wolfDirectionChange","catchEggHandler"]]],[1,"g-wolf",{"position":[1025],"directionX":[32],"directionY":[32]},[[4,"gChooseDirection","chooseHandler"],[4,"keydown","handleKeyDown"]]],[1,"nav-button",{"direction":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
