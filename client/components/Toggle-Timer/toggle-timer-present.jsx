// @flow

import React from 'react';

type Props = {
  allownew: boolean,
  timer: boolean,
  toggleTimer: () => mixed,
};

const ToggleTimer = ({ toggleTimer, timer, allownew }: Props) => (
  <div id='toggletimer'>
    <form>
      <label htmlFor='timer-choice'>
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
  </div>
);

export default ToggleTimer;
