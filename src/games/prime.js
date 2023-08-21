import readlineSync from 'readline-sync';
import { userName, rounds, correctAnswer } from '../index.js';
import isPrime from '../tools/prime-function.js';
import getRandomNumber from '../tools/getRandomNumber.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const runPrimeGame = (number) => {
  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = getRandomNumber(1, 17);
    const primeNumber = isPrime(randomNumber);
    console.log(`Question: ${randomNumber}`);
    const userResponse = readlineSync.question('Your answer: ');
    let answer;
    if (primeNumber === true) {
      answer = 'yes';
    } else if (primeNumber === false) {
      answer = 'no';
    }
    if (userResponse === correctAnswer) {
      console.log(correctAnswer);
    } else return console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
  }
  console.log(`Congratulations, ${userName}!`);
  return number;
};

export default runPrimeGame;
