// @flow

import React from 'react';
import TimerFormat from './timer-format';
import TimerCountdown from './timer-countdown';

type Props = {
  tickTock: () => mixed,
  endGame: () => mixed,
  timer: boolean,
  isclicking: boolean,
  secondsleft: number,
};

const TimerClock = ({
  tickTock,
  endGame,
  timer,
  isclicking,
  secondsleft,
}: Props) => {
  const timerClass = timer ? 'timer-show' : 'timer-hide';
  const tick2 = () => tickTock();
  if (secondsleft === 0 && isclicking) {
    endGame();
  }
  return (
    <div
      className={timerClass}
    >
      { isclicking
        ? <TimerCountdown tick2={tick2} secondsleft={secondsleft} />
        : <TimerFormat secondsleft={secondsleft} />
      }

    </div>
  );
};

export default TimerClock;
