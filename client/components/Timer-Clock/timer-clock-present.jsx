// @flow

import React from 'react';
import TimerFormat from './timer-format';
import TimerCountdown from './timer-countdown';

type Props = {
  tickTock: () => mixed,
  timer: boolean,
  isclicking: boolean,
  secondsleft: number,
};

const TimerClock = ({
  tickTock,
  timer,
  isclicking,
  secondsleft,
}: Props) => {
  const timerClass = timer ? 'timer-show' : 'timer-hide';

  return (
    <div
      className={timerClass}
    >
      { isclicking
        ? <TimerCountdown tickTock={tickTock} secondsleft={secondsleft} />
        : <TimerFormat secondsleft={secondsleft} />
      }

    </div>
  );
};

export default TimerClock;
