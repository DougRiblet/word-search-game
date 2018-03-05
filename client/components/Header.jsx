import React from 'react';
import Logo from './Logo';
import NewGameButton from './New-Game';
import EndGameButton from './End-Game';
import ToggleTimer from './Toggle-Timer';

const Header = () => (
  <div id='header-container'>
    <Logo />
    <NewGameButton />
    <EndGameButton />
    <ToggleTimer />
  </div>
);

export default Header;
