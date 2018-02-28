// @flow

import React from 'react';

type Props = {
  secondsleft: number,
};

const TimerFormat = ({ secondsleft }: Props) => {
  const minutes = String(Math.floor(secondsleft / 60));
  const remainder = secondsleft % 60;
  const seconds = (remainder < 10 ? '0' : '') + String(remainder);
  return (
    <span>
      {minutes}:{seconds}
    </span>
  );
};

export default TimerFormat;
