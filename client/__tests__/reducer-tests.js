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

})
