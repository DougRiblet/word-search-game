import React from 'react';
import allfours from '../../words/all-fours';
import selectsevens from '../../words/select-sevens';

const newButton = ({ newGame, allownew }) => {

  const testfour = (seven, four) => {
    const alphaseven = seven.split('').sort().join('');
    const alphafour = four.split('').sort().join('');
    let indexInSeven = 0;
    let match = 0;
    for (let i=0; i<4; i+=1){
      for (let j=indexInSeven; j<7; j+=1){
        if (alphafour[i] === alphaseven[j]){
          match += 1;
          indexInSeven = j + 1;
          break;
        }
      }
    }
    return match === 4;
  };

  const generateNewGame = event => {
    const newseven = selectsevens[Math.floor(Math.random() * 1214)];
    let newpool = [];

    allfours.forEach(function(item){
      if (testfour(newseven, item)) {
        newpool.push(item);
      }
    });
    console.log("NEW WORD: ", newseven, newpool);
    newGame(newseven, newpool);
  }

  return (
    <button
      id='new-game-button'
      disabled={!allownew}
      onClick={generateNewGame}
    >New Game</button>
  )
};

export default newButton;
