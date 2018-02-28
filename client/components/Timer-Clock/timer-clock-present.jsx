// @flow

import React from 'react';
import TimerFormat from './timer-format';

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
    <div
      className={timerClass}
    >
      <TimerFormat secondsleft={secondsleft} />
    </div>
  );
};

export default TimerClock;
