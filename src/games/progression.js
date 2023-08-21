import readlineSync from 'readline-sync';
import { userName, rounds, correctAnswer } from '../index.js';
import getRandomNumber from '../tools/getRandomNumber.js';

console.log('What number is missing in the progression?');
const runDeterminingNumber = (number) => {
  for (let i = 0; i < rounds; i += 1) {
    const firstNumber = getRandomNumber(1, 30);
    const step = getRandomNumber(1, 10);
    const progressionlength = getRandomNumber(6, 8);
    const array = [];
    let result;
    for (let j = 1; j < progressionlength; j += 1) {
      result = firstNumber + (step * j);
      array.push(result);
    }
    const getArrayIndex = array[Math.floor(Math.random() * array.length)];
    const numberToString = getArrayIndex.toString();
    const indexToСolon = array.indexOf(getArrayIndex);
    array[indexToСolon] = '..';
    const str = array.join(' ');
    console.log(`Question: ${str}`);
    const userResponse = readlineSync.question('Your answer: ');
    if (userResponse === numberToString) {
      console.log(correctAnswer);
    } else return console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${getArrayIndex}'.\nLet's try again, ${userName}!`);
  }
  console.log(`Congratulations, ${userName}!`);
  return number;
};

export default runDeterminingNumber;
