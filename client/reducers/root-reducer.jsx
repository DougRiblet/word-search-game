import * as types from '../actions/action-types';

const reducer = (state, action) => {
  switch (action.type) {
    case types.GUESS_RIGHT:
      return Object.assign({}, state, {
        poolfour: action.newpool,
        foundfour: action.newfound,
      });
    case types.GUESS_WRONG:
      return Object.assign({}, state, {
        wrongfour: action.newwrong,
      });
    case types.END_GAME:
      return Object.assign({}, state, {
        allownew: true,
        showmissing: true,
      });
    case types.REQUEST_NEW_GAME:
      return Object.assign({}, state, {
        allownew: false,
        isfetching: true,
        currentseven: '',
        poolfour: [],
        foundfour: [],
        wrongfour: [],
        showmissing: false,
      });
    case types.RECEIVE_NEW_GAME:
      return Object.assign({}, state, {
        allownew: false,
        isfetching: false,
        currentseven: action.newseven,
        poolfour: action.newpool,
        foundfour: [],
        wrongfour: [],
        showmissing: false,
      });
    default:
      return state;
  }
};

export default reducer;
