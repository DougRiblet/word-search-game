import React from 'react';

const newButton = ({ newGame, allownew }) => (
  <button
    id='new-game-button'
    disabled={!allownew}
    onClick={newGame}
  >
    New Game
  </button>
);

export default newButton;
