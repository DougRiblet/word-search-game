// @flow

import type { Dispatch } from 'redux';
import * as types from './action-types';
import generateNewWord from '../words/generateNewWord';

export const guessRight = (newpool: Array<string>, newfound: Array<string>) => ({
  type: types.GUESS_RIGHT,
  newpool,
  newfound,
});

export const guessWrong = (newwrong: Array<string>) => ({
  type: types.GUESS_WRONG,
  newwrong,
});

export const toggleTimer = () => ({
  type: types.TOGGLE_TIMER,
});

export const endGame = () => ({
  type: types.END_GAME,
});

const requestNewGame = () => ({
  type: types.REQUEST_NEW_GAME,
});

const receiveNewGame = (newseven: string, newpool: Array<string>, newlength: number, newsecs: number) => ({
  type: types.RECEIVE_NEW_GAME,
  newseven,
  newpool,
  newlength,
  newsecs,
});

/* eslint-disable func-names, no-console */

export function newGame() {
  return function (dispatch: Dispatch<*>) {
    dispatch(requestNewGame());
    generateNewWord()
      .then(res => dispatch(receiveNewGame(res.newSeven, res.newPool, res.newLength, res.newSecs)))
      .catch(err => console.log(err.message));
  };
}

/* eslint-enable func-names, no-console */
