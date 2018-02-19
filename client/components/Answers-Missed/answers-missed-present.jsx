import React from 'react';

const answersMissed = ({ poolfour, showmissed }) => (
  <div id='answers-missed'>
    { showmissed ? poolfour : '' }
  </div>
);

export default answersMissed;
