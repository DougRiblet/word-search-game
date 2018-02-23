
export const afterGuessRight = {
  allownew: true,
  isfetching: false,
  timer: false,
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
  currentseven: '',
  poolfour: [],
  foundfour: [],
  wrongfour: [],
  poollength: 2,
  foundlength: 0,
  showmissed: false,
};




