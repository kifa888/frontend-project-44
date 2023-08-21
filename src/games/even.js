import readlineSync from 'readline-sync';
import { userName, rounds, correctAnswer } from '../index.js';
import getRandomNumber from '../tools/getRandomNumber.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const runParityCheck = (number) => {
  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = getRandomNumber(1, 30);
    console.log(`Question: ${randomNumber}`);
    const userResponse = readlineSync.question('Your answer: ');
    const answer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if ((userResponse === 'yes' && randomNumber % 2 === 0) || (userResponse === 'no' && randomNumber % 2 !== 0)) {
      console.log(correctAnswer);
    } else if (userResponse === 'yes' && randomNumber % 2 !== 0) {
      return console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
    } else if (userResponse === 'no' && randomNumber % 2 === 0) {
      return console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
    } else return console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${answer}'. \nLet's try again, ${userName}!`);
  }

  console.log(`Congratulations, ${userName}!`);
  return number;
};

export default runParityCheck;
