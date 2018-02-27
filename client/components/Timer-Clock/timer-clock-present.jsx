// @flow

import React from 'react';

type Props = {
  newGame: () => mixed,
  allownew: boolean,
  timer: boolean,
};

const TimerClock = ({ newGame, allownew, timer }: Props) => {
  let timerClass = timer ? 'timer-show' : 'timer-hide';

  return (
    <span
      className={timerClass}
    >
      0:00
    </span>
  );
};

export default TimerClock;
