import React from 'react';
import QuizSeven from './Quiz-Seven';
import InputFour from './Input-Four';
import AnswersCount from './Answers-Count';
import AnswersRight from './Answers-Right';
import AnswersMissed from './Answers-Missed';
import AnswersWrong from './Answers-Wrong';

const Gameboard = () => (
  <div id='gameboard-container'>
    <QuizSeven />
    <InputFour />
    <AnswersCount />
    <AnswersRight />
    <AnswersMissed />
    <AnswersWrong />
  </div>
);

export default Gameboard;
