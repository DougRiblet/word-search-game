import React, { Component } from 'react';

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
