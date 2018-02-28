// @flow

import React from 'react';

type Props = {
  newGame: () => mixed,
  allownew: boolean,
  timer: boolean,
  isclicking: boolean,
  secondsleft: number,
};

const TimerClock = ({ newGame, allownew, timer, isclicking, secondsleft }: Props) => {
  const timerClass = timer ? 'timer-show' : 'timer-hide';

  return (
    <span
      className={timerClass}
    >
      0:00
    </span>
  );
};

export default TimerClock;
