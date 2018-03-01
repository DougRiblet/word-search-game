// @flow

import React from 'react';

type Props = {
  poollength: number,
  foundlength: number,
  allownew: boolean,
  endGame: () => mixed,
};

const AnswersCount = ({
  poollength,
  foundlength,
  allownew,
  endGame,
}: Props) => {
  if (poollength === foundlength && !allownew) {
    endGame();
  }
  return (
    <div id='answers-count'>
      { foundlength } of { poollength }
    </div>
  );
};

export default AnswersCount;
