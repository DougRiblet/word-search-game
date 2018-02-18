import React from 'react';
import QuizSeven from './Quiz-Seven';
import InputFour from './Input-Four';
import AnswersFour from './Answers-Four';

const Gameboard = () => (
  <div id='gameboard-container'>
    <div id='quiz-seven'>
      <QuizSeven />
    </div>
    <div id='input-four'>
      <InputFour />
    </div>
    <AnswersFour />
  </div>
);

export default Gameboard;
