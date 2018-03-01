import reducer from '../reducers/root-reducer';
import initialState from '../initial/initial-state';
import * as types from '../actions/action-types';
import * as mocks from '../mocks/mock-states';

describe('Reducer', () => {
  test('return state unchanged if no action', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  });

  test('handles GUESS_RIGHT action properly', () => {
    const action = {
      type: types.GUESS_RIGHT,
      newpool: ['JEEZ'],
      newfound: ['EELY'],
    };
    expect(reducer(initialState, action)).toEqual(mocks.afterGuessRight);
  });

  test('handles GUESS_WRONG action properly', () => {
    const action = {
      type: types.GUESS_WRONG,
      newwrong: ['JYZL'],
    };
    expect(reducer(initialState, action)).toEqual(mocks.afterGuessWrong);
  });

  test('handles REQUEST_NEW_GAME action properly', () => {
    const action = {
      type: types.REQUEST_NEW_GAME,
    };
    expect(reducer(initialState, action)).toEqual(mocks.afterRequestNewGame);
  });

  test('handles RECEIVE_NEW_TIMED_GAME action properly', () => {
    const action = {
      type: types.RECEIVE_NEW_TIMED_GAME,
      newseven: 'QAWWALI',
      newpool: ['WAIL', 'WALI', 'WAWL'],
      newlength: 3,
      newsecs: 25,
    };
    let prestate = Object.assign({}, initialState);
    prestate.allownew = false;
    prestate.isfetching = true;
    prestate.timer = true;

    expect(reducer(prestate, action)).toEqual(mocks.afterReceiveNewTimedGame);
  });

  test('handles RECEIVE_NEW_UNTIMED_GAME action properly', () => {
    const action = {
      type: types.RECEIVE_NEW_UNTIMED_GAME,
      newseven: 'QAWWALI',
      newpool: ['WAIL', 'WALI', 'WAWL'],
      newlength: 3,
      newsecs: 0,
    };
    let prestate = Object.assign({}, initialState);
    prestate.allownew = false;
    prestate.isfetching = true;

    expect(reducer(prestate, action)).toEqual(mocks.afterReceiveNewUntimedGame);
  });

  test('handles TOGGLE_TIMER correctly',() => {
    const action = {
      type: types.TOGGLE_TIMER,
    };
    expect(reducer(initialState, {}).timer).toEqual(false);
    expect(reducer(initialState, action).timer).toEqual(true);
  });

});
