import React from 'react';

const answers = ({ poolfour, foundfour, wrongfour, showmissed }) => (
  <div>
    <div class='answersrow' id='rightfound'>
      { foundfour }
    </div>
    <div class='answersrow' id='rightmissed'>
      { showmissed ? poolfour : '' }
    </div>
    <div class='answersrow' id='guessedwrong'>
      { wrongfour }
    </div>

  </div>
);

export default answers;