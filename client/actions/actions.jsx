import { GUESS_RIGHT, GUESS_WRONG } from './action-types';

export const guessRight = (word) => {
  return {
    type: GUESS_RIGHT,
    id: id
  };
};

export const guessWrong = (word) => {
  return {
    type: GUESS_WRONG,
    id: id
  };
};
