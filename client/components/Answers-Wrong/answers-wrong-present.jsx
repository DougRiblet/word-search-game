// @flow

import React from 'react';

type Props = {
  wrongfour: string,
};

const answersWrong = ({ wrongfour }: Props) => (
  <div id='answers-wrong'>
    { wrongfour }
  </div>
);

export default answersWrong;
