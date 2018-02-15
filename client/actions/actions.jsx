import { GUESS_RIGHT, GUESS_WRONG, NEW_GAME } from './action-types';

export const guessRight = (newpool, newfound) => ({
  type: GUESS_RIGHT,
  newpool,
  newfound,
});

export const guessWrong = newwrong => ({
  type: GUESS_WRONG,
  newwrong,
});

export const newGame = (newseven, newpool) => ({
  type: NEW_GAME,
  newseven,
  newpool,
});
