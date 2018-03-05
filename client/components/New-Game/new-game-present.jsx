// @flow

import React from 'react';

type Props = {
  newGame: (boolean) => mixed,
  allownew: boolean,
  timer: boolean,
};

const NewButton = ({ newGame, allownew, timer }: Props) => {
  const handleClick = () => newGame(timer);
  return (
    <div id='newgame'>
      <button
        id='new-game-button'
        disabled={!allownew}
        onClick={handleClick}
      >
        New Game
      </button>
    </div>
  );
};


export default NewButton;
