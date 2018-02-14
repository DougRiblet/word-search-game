import { GUESS_RIGHT, GUESS_WRONG } from '../actions/action-types';

const reducer = (state, action) => {
  switch (action.type) {
    case GUESS_RIGHT:
      return Object.assign({}, state, {
        poolfour: action.newpool,
        foundfour: action.newfound
      });
    case GUESS_WRONG:
      return Object.assign({}, state, {
        wrongfour: action.newwrong
      });
    default:
      return state;
  }
};

export default reducer;
