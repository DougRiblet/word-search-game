import * as types from '../actions/action-types';

const reducer = (state, action) => {
  switch (action.type) {
    case types.GUESS_RIGHT:
      return Object.assign({}, state, {
        poolfour: action.newpool,
        foundfour: action.newfound,
        foundlength: state.foundlength + 1,
      });
    case types.GUESS_WRONG:
      return Object.assign({}, state, {
        wrongfour: action.newwrong,
      });
    case types.END_GAME:
      return Object.assign({}, state, {
        allownew: true,
        showmissed: true,
      });
    case types.REQUEST_NEW_GAME:
      return Object.assign({}, state, {
        allownew: false,
        isfetching: true,
        currentseven: '',
        poolfour: [],
        foundfour: [],
        wrongfour: [],
        showmissed: false,
      });
    case types.RECEIVE_NEW_GAME:
      return Object.assign({}, state, {
        allownew: false,
        isfetching: false,
        currentseven: action.newseven,
        poolfour: action.newpool,
        foundfour: [],
        wrongfour: [],
        poollength: action.newlength,
        foundlength: 0,
        showmissed: false,
      });
    default:
      return state;
  }
};

export default reducer;
