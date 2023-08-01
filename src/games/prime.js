import readlineSync from 'readline-sync';
import { userName, rounds, getRandomNumber } from '../index.js';
import isPrime from './prime-function.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const primeGame = (number) => {
  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = getRandomNumber(1, 17);
    const primeNumber = isPrime(randomNumber);
    console.log(`Question: ${randomNumber}`);
    const userResponse = readlineSync.question('Your answer: ');
    let correctAnswer;
    if (primeNumber === true) {
      correctAnswer = 'yes';
    } else if (primeNumber === false) {
      correctAnswer = 'no';
    }
    if (userResponse === correctAnswer) {
      console.log('Correct!');
    } else return console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  }
  console.log(`Congratulations, ${userName}!`);
  return number;
};

export default primeGame;
