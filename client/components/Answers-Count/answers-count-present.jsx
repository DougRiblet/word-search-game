// @flow

import React from 'react';

type Props = {
  poollength: number,
  foundlength: number,
};


const answersCount = ({ poollength, foundlength }: Props) => (
  <div id='answers-count'>
    { foundlength } of { poollength }
  </div>
);

export default answersCount;
