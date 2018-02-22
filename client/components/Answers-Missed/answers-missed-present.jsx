// @flow

import React from 'react';

type Props = {
  poolfour: string,
  showmissed: boolean,
};

const AnswersMissed = ({ poolfour, showmissed }: Props) => (
  <div id='answers-missed'>
    { showmissed ? poolfour : '' }
  </div>
);

export default AnswersMissed;
