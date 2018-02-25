import React from 'react';
import NewGameButton from './New-Game';
import EndGameButton from './End-Game';
import ToggleTimer from './Toggle-Timer';

const Controls = () => (
  <div id='controls-container'>
    <NewGameButton />
    <EndGameButton />
    <ToggleTimer />
  </div>
);

export default Controls;
