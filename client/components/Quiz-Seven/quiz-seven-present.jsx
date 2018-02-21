// @flow

import React from 'react';

type Props = {
  currentseven: string,
};

const currentSeven = ({ currentseven }: Props) => (
  <div id='quiz-seven'>
    <h1>{ currentseven }</h1>
  </div>
);

export default currentSeven;
