import React, { Component } from 'react';
import QuizSeven from './Quiz-Seven';
import InputFour from './Input-Four';

export default class Gameboard extends Component {
  render() {
    return (
      <div id="gameboard-container">
        <div id="quiz-seven">
          <QuizSeven />
        </div>
        <div id="input-four">
          <InputFour />
        </div>
      </div>
    );
  }
}