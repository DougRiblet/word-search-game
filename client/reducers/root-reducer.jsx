import {
  GUESS_RIGHT,
  GUESS_WRONG,
  NEW_GAME,
} from '../actions/action-types';

const reducer = (state, action) => {
  switch (action.type) {
    case GUESS_RIGHT:
      return Object.assign({}, state, {
        poolfour: action.newpool,
        foundfour: action.newfound,
      });
    case GUESS_WRONG:
      return Object.assign({}, state, {
        wrongfour: action.newwrong,
      });
    case NEW_GAME:
      return Object.assign({}, state, {
        currentseven: action.newseven,
        poolfour: action.newpool,
        foundfour: [],
        wrongfour: [],
        allownew: false,
        showmissed: false,
      });
    default:
      return state;
  }
};

export default reducer;
