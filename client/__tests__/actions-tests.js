import * as actions from '../actions/actions';
import * as types from '../actions/action-types';
import initialState from '../initial/initial-state';

describe('Action Creators', () => {

  test('call action for correct guess', () => {
    const dummyA1 = ['ABCD', 'EFGH'];
    const dummyA2 = ['DCBA', 'HGFE'];
    const expectedAction = {
      type: types.GUESS_RIGHT,
      newpool: dummyA1,
      newfound: dummyA2,
    };
    expect(actions.guessRight(dummyA1, dummyA2)).toEqual(expectedAction);
  });

  test('call action for wrong guess', () => {
    const dummyB1 = ['ABCD', 'EFGH', 'HGFE'];
    const expectedAction = {
      type: types.GUESS_WRONG,
      newwrong: dummyB1,
    };
    expect(actions.guessWrong(dummyB1)).toEqual(expectedAction);
  });

  test('call action to toggle timer', () => {
    const expectedAction = {
      type: types.TOGGLE_TIMER,
    };
    expect(actions.toggleTimer()).toEqual(expectedAction);
  });

  test('call action to tick tock clock', () => {
    const expectedAction = {
      type: types.TICK_TOCK,
    };
    expect(actions.tickTock()).toEqual(expectedAction);
  });

  test('call action to end game', () => {
    const expectedAction = {
      type: types.END_GAME,
    };
    expect(actions.endGame()).toEqual(expectedAction);
  });

});
