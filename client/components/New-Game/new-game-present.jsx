// @flow

import React from 'react';

type Props = {
  newGame: () => mixed,
  allownew: boolean,
};

const newButton = ({ newGame, allownew }: Props) => (
  <button
    id='new-game-button'
    disabled={!allownew}
    onClick={newGame}
  >
    New Game
  </button>
);

export default newButton;
