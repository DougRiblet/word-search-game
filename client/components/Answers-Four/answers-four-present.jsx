import React from 'react';

const answers = ({
  poolfour,
  foundfour,
  wrongfour,
  showmissed,
}) => (
  <div>
    <div className='answersrow' id='rightfound'>
      { foundfour }
    </div>
    <div className='answersrow' id='rightmissed'>
      { showmissed ? poolfour : '' }
    </div>
    <div className='answersrow' id='guessedwrong'>
      { wrongfour }
    </div>

  </div>
);

export default answers;
