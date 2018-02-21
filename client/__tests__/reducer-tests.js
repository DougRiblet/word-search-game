import reducer from '../reducers/root-reducer'
import initialState from '../initial/initial-state'

describe('Reducer', () => {
  test('return state unchanged if no action', () => {
    expect(reducer(initialState, {})).toEqual(initialState)
  })
})
