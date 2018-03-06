// @flow

import React from 'react';

type Props = {
  allownew: boolean,
  timer: boolean,
  toggleTimer: () => mixed,
};

const ToggleTimer = ({ toggleTimer, timer, allownew }: Props) => (
  <div id='toggletimer'>
    <div id='togglecheck'>
      <input
        type='checkbox'
        name='timer-choice'
        checked={timer}
        disabled={!allownew}
        onChange={toggleTimer}
      />
      <label htmlFor='timer-choice'></label>
    </div>
  </div>
);

export default ToggleTimer;
