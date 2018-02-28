// @flow

import * as types from '../actions/action-types';

// eslint-disable-next-line no-undef
const reducer = (state: ftState, action: Object): ftState => {
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
    case types.TOGGLE_TIMER:
      return Object.assign({}, state, {
        timer: !state.timer,
      });
    case types.END_GAME:
      return Object.assign({}, state, {
        allownew: true,
        isclicking: false,
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
        isclicking: true,
        secondsleft: action.newsecs,
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
