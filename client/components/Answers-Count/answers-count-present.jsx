import React from 'react';

const answersCount = ({ poollength, foundlength }) => (
  <div id='answers-count'>
    { foundlength } of { poollength }
  </div>
);

export default answersCount;
