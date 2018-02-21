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

});