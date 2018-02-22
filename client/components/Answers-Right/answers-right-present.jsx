// @flow

import React from 'react';

type Props = {
  foundfour: string,
};

const AnswersRight = ({ foundfour }: Props) => (
  <div id='answers-right'>
    { foundfour }
  </div>
);

export default AnswersRight;
