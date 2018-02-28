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

export const tickTock = () => ({
  type: types.TICK_TOCK,
});

export const endGame = () => ({
  type: types.END_GAME,
});

const requestNewGame = () => ({
  type: types.REQUEST_NEW_GAME,
});

// eslint-disable-next-line max-len
const receiveNewTimedGame = (newseven: string, newpool: Array<string>, newlength: number, newsecs: number) => ({
  type: types.RECEIVE_NEW_TIMED_GAME,
  newseven,
  newpool,
  newlength,
  newsecs,
});

// eslint-disable-next-line max-len
const receiveNewUntimedGame = (newseven: string, newpool: Array<string>, newlength: number) => ({
  type: types.RECEIVE_NEW_UNTIMED_GAME,
  newseven,
  newpool,
  newlength,
});

/* eslint-disable func-names, no-console, max-len */

export function newGame(timed: boolean) {
  if (timed) {
    return function (dispatch: Dispatch<*>) {
      dispatch(requestNewGame());
      generateNewWord()
        .then(res => dispatch(receiveNewTimedGame(res.newSeven, res.newPool, res.newLength, res.newSecs)))
        .catch(err => console.log(err.message));
    };
  }

  return function (dispatch: Dispatch<*>) {
    dispatch(requestNewGame());
    generateNewWord()
      .then(res => dispatch(receiveNewUntimedGame(res.newSeven, res.newPool, res.newLength)))
      .catch(err => console.log(err.message));
  };
}

/* eslint-enable func-names, no-console, max-len */
