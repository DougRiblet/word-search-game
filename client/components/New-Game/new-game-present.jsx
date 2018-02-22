// @flow

import React from 'react';

type Props = {
  newGame: () => mixed,
  allownew: boolean,
};

const NewButton = ({ newGame, allownew }: Props) => (
  <button
    id='new-game-button'
    disabled={!allownew}
    onClick={newGame}
  >
    New Game
  </button>
);

export default NewButton;
