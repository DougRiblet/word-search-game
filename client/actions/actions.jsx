import * as types from './action-types';
import generateNewWord from '../words/generateNewWord';

export const guessRight = (newpool, newfound) => ({
  type: types.GUESS_RIGHT,
  newpool,
  newfound,
});

export const guessWrong = newwrong => ({
  type: types.GUESS_WRONG,
  newwrong,
});

const requestNewGame = () => ({
  type: types.REQUEST_NEW_GAME,
});

const receiveNewGame = (newseven, newpool) => ({
  type: types.RECEIVE_NEW_GAME,
  newseven,
  newpool,
});

export function newGame() {
  return function (dispatch) {
    dispatch(requestNewGame());
    generateNewWord()
      .then(res => dispatch(receiveNewGame(res.newSeven, res.newPool)))
      .catch(err => console.log(err.message));
  };
}
