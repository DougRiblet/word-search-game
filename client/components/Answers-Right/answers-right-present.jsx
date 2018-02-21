// @flow

import React from 'react';

type Props = {
  foundfour: string,
};

const answersRight = ({ foundfour }: Props) => (
  <div id='answers-right'>
    { foundfour }
  </div>
);

export default answersRight;
