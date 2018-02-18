import React from 'react';

const endButton = ({ endGame, allownew }) => (
  <button
    id='end-game-button'
    disabled={allownew}
    onClick={endGame}
  >
    End Game
  </button>
);

export default endButton;
