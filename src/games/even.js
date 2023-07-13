import readlineSync from 'readline-sync';
import getRandomNumber from './getRandomNumber.js';

const greetings = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let score = 0;
  while (score < 3) {
    const randomNumber1 = getRandomNumber();
    console.log(`Question: ${randomNumber1}`);
    const userResponse = readlineSync.question('Your answer: ');
    if ((userResponse === 'yes' && randomNumber1 % 2 === 0) || (userResponse === 'no' && randomNumber1 % 2 !== 0)) {
      console.log('Correct!');
      score += 1;
    } else if (userResponse === 'yes' && randomNumber1 % 2 !== 0) {
      return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`);
    } else if (userResponse === 'no' && randomNumber1 % 2 === 0) {
      return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`);
    } else return console.log(`Let's try again, ${userName}!`);
    if (score === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default greetings;
