import { GUESS_RIGHT, GUESS_WRONG } from './action-types';

export const guessRight = (newpool, newfound) => {
  return {
    type: GUESS_RIGHT,
    newpool,
    newfound
  };
};

export const guessWrong = (newwrong) => {
  return {
    type: GUESS_WRONG,
    newwrong
  };
};
