
import readlineSync from 'readline-sync';
import getRandomNum from './games/getRandomNumber.js';

export const greetings = () => console.log('Welcome to the Brain Games!';
export const userName = () => readlineSync.question('May I have your name? ') 
export const greetingsUser = () => console.log(`Hello, ${userName}!`)



export const gameConditionsEven = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export const calculationEven = () => {
    let score = 0;
    while (score < 3) {
      const randomNumber = getRandomNum(1, 99);
      console.log(`Question: ${randomNumber}`);
      const userResponse = readlineSync.question('Your answer: ');
      if ((userResponse === 'yes' && randomNumber % 2 === 0) || (userResponse === 'no' && randomNumber % 2 !== 0)) {
        console.log('Correct!');
        score += 1;
      } else if (userResponse === 'yes' && randomNumber % 2 !== 0) {
        return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`);
      } else if (userResponse === 'no' && randomNumber % 2 === 0) {
        return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`);
      } else return console.log(`Let's try again, ${userName}!`);
      if (score === 3) {
        return console.log(`Congratulations, ${userName}!`);
      }
    }
}
>>>>>>> c61541bfe20896f86bc488bf8abf959e118de8d2
