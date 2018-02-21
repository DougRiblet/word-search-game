// @flow

import React from 'react';

type Props = {
  currentseven: string,
};

const CurrentSeven = ({ currentseven }: Props) => (
  <div id='quiz-seven'>
    <h1>{ currentseven }</h1>
  </div>
);

export default CurrentSeven;
