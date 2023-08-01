import readlineSync from 'readline-sync';
import { userName, rounds, getRandomNumber } from '../index.js';

console.log('What is the result of the expression?');

const calculator = () => {
  for (let i = 0; i < rounds; i += 1) {
    const operations = ['+', '-', '*'];
    const getRandomOperations = operations[Math.floor(Math.random() * operations.length)];
    const generator1 = getRandomNumber(1, 10);
    const generator2 = getRandomNumber(1, 10);
    const equation = `${generator1} ${getRandomOperations} ${generator2}`;
    console.log(`Question: ${equation}`);
    const userResponse = readlineSync.question('Your answer: ');
    let getCalculationSigns;
    if (getRandomOperations === '+') {
      getCalculationSigns = `${generator1 + generator2}`;
    } else if (getRandomOperations === '-') {
      getCalculationSigns = `${generator1 - generator2}`;
    } else if (getRandomOperations === '*') {
      getCalculationSigns = `${generator1 * generator2}`;
    }

    if (userResponse === getCalculationSigns) {
      console.log('Correct!');
    } else {
      console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${getCalculationSigns}'.\nLet's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default calculator;
