import React, { Component } from 'react';
import QuizSeven from './Quiz-Seven';

export default class Gameboard extends Component {
  render() {
    return (
      <div id="gameboard-container">
        <div id="quiz-seven">
          <QuizSeven />
        </div>
      </div>
    );
  }
}