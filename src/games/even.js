import readlineSync from 'readline-sync';
import getRandomNumber from './getRandomNumber.js';
import userName from '../index.js';

const rounds = 3;
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const greetings = () => {
  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = getRandomNumber(1, 30);
    console.log(`Question: ${randomNumber}`);
    const userResponse = readlineSync.question('Your answer: ');
    if ((userResponse === 'yes' && randomNumber % 2 === 0) || (userResponse === 'no' && randomNumber % 2 !== 0)) {
      console.log('Correct!');
    } else if (userResponse === 'yes' && randomNumber % 2 !== 0) {
      return console.log(`'no' is wrong answer ;(. Correct answer was '${userResponse}'.\nLet's try again, ${userName}!`);
    } else if (userResponse === 'no' && randomNumber % 2 === 0) {
      return console.log(`'no' is wrong answer ;(. Correct answer was '${userResponse}'.\nLet's try again, ${userName}!`);
    } else return console.log(`'${userResponse}' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}!`);
  }

 console.log(`Congratulations, ${userName}!`);
  
};

export default greetings;