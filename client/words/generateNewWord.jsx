import fours from './all-fours';
import sevens from './select-sevens';

const testFour = (alphaSeven, four) => {
  const alphaFour = four.split('').sort();
  let indexInSeven = 0;
  let match = 0;
  for (let i=0; i<4; i+=1){
    for (let j=indexInSeven; j<7; j+=1){
      if (alphaFour[i] === alphaSeven[j]){
        match += 1;
        indexInSeven = j + 1;
        break;
      }
    }
  }
  return match === 4;
};

const generateNewWord = () => {
  let newSeven = sevens[Math.floor(Math.random() * sevens.length)];
  let alphaSeven = newSeven.split('').sort();
  let newPool = [];

  fours.forEach(function(item){
    if (testFour(alphaSeven, item)) {
      newPool.push(item);
    }
  });

  let newLength = newPool.length;
  let newSecs = 10 + (newLength * 5);
  let output = {newSeven, newPool, newLength, newSecs};

  return new Promise(
    (resolve, reject) => {
      if (output) {
        resolve(output);
      } else {
        const reason = new Error('Error starting new game');
        reject(reason);
      }
    }
  );
};

export default generateNewWord;
