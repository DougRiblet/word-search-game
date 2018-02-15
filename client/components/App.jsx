import React from 'react';
import Header from './Header';
import Controls from './Controls';
import Gameboard from './Gameboard';
import Footer from './Footer';

const App = () => (
  <div>
    <header>
      <Header />
    </header>
    <main>
      <Controls />
      <Gameboard />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;
