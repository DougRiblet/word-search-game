import { GUESS_RIGHT, GUESS_WRONG } from './action-types';

export const guessRight = (newpool, newfound) => ({
  type: GUESS_RIGHT,
  newpool,
  newfound,
});

export const guessWrong = newwrong => ({
  type: GUESS_WRONG,
  newwrong,
});
