// @flow

import React from 'react';

type Props = {
  newGame: () => mixed,
  allownew: boolean,
  timer: boolean,
};

const NewButton = ({ newGame, allownew, timer }: Props) => {
  const handleClick = () => newGame(timer);
  return (
    <button
      id='new-game-button'
      disabled={!allownew}
      onClick={handleClick}
    >
      New Game
    </button>
  );
};


export default NewButton;
