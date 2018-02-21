// @flow

import React from 'react';

type Props = {
  endGame: () => mixed,
  allownew: boolean,
};

const endButton = ({ endGame, allownew }: Props) => (
  <button
    id='end-game-button'
    disabled={allownew}
    onClick={endGame}
  >
    End Game
  </button>
);

export default endButton;
