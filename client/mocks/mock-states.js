
export const afterGuessRight = {
  allownew: true,
  isfetching: false,
  timer: false,
  isclicking: false,
  secondsleft: 0,
  currentseven: 'JEEZELY',
  poolfour: ['JEEZ'],
  foundfour: ['EELY'],
  wrongfour: [],
  poollength: 2,
  foundlength: 1,
  showmissed: false,
};

export const afterGuessWrong = {
  allownew: true,
  isfetching: false,
  timer: false,
  isclicking: false,
  secondsleft: 0,
  currentseven: 'JEEZELY',
  poolfour: ['JEEZ', 'EELY'],
  foundfour: [],
  wrongfour: ['JYZL'],
  poollength: 2,
  foundlength: 0,
  showmissed: false,
};

export const afterRequestNewGame = {
  allownew: false,
  isfetching: true,
  timer: false,
  isclicking: false,
  secondsleft: 0,
  currentseven: '',
  poolfour: [],
  foundfour: [],
  wrongfour: [],
  poollength: 2,
  foundlength: 0,
  showmissed: false,
};

export const afterReceiveNewTimedGame = {
  allownew: false,
  isfetching: false,
  timer: true,
  isclicking: true,
  secondsleft: 25,
  currentseven: 'QAWWALI',
  poolfour: ['WAIL', 'WALI', 'WAWL'],
  foundfour: [],
  wrongfour: [],
  poollength: 3,
  foundlength: 0,
  showmissed: false,
};

export const afterReceiveNewUntimedGame = {
  allownew: false,
  isfetching: false,
  timer: false,
  isclicking: false,
  secondsleft: 0,
  currentseven: 'QAWWALI',
  poolfour: ['WAIL', 'WALI', 'WAWL'],
  foundfour: [],
  wrongfour: [],
  poollength: 3,
  foundlength: 0,
  showmissed: false,
};
