// @flow

import React from 'react';

type Props = {
  allownew: boolean,
  timer: boolean,
  toggleTimer: () => mixed,
};

const ToggleTimer = ({ toggleTimer, timer, allownew }: Props) => (
  <form>
    <label>
      Timer: 
      <input
        type='checkbox'
        name='timer-choice'
        checked={timer}
        disabled={!allownew}
        onChange={toggleTimer}
      />
    </label>
  </form>
);

export default ToggleTimer;