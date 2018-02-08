import React, { Component } from 'react';
import Header from './Header';
import Controls from './Controls';
import Gameboard from './Gameboard';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
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
  }
}
