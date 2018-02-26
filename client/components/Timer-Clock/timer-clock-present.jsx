// @flow

import React from 'react';

type Props = {
  newGame: () => mixed,
  allownew: boolean,
};

const TimerClock = ({ newGame, allownew }: Props) => (
  <span>0:00</span>
);

export default TimerClock;
