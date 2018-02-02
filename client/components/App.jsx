import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Controls />
        <Gameboard />
      </div>
    );
  }
}
