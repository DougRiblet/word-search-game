// @flow

import React from 'react';

type Props = {
  wrongfour: string,
};

const AnswersWrong = ({ wrongfour }: Props) => (
  <div id='answers-wrong'>
    { wrongfour }
  </div>
);

export default AnswersWrong;
