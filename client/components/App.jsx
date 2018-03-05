import React from 'react';
import Header from './Header';
import Gameboard from './Gameboard';
import Timer from './Timer';

const App = () => (
  <div>
    <header>
      <Header />
    </header>
    <main>
      <div id='main-container'>
        <Timer />
        <Gameboard />
      </div>
    </main>
  </div>
);

export default App;
