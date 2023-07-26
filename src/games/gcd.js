import readlineSync from 'readline-sync';
import { userName, rounds, getRandomNumber } from '../index.js';
import getGCD from './nod-gcd.js';

console.log('Find the greatest common divisor of given numbers.');

const commonDivisors = () => {
  for (let i = 0; i < rounds; i += 1) {
  const number1  = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  console.log (`Question: ${number1} ${number2}`);
  const result = getGCD(number1, number2)
  const userResponse = readlineSync.question('Your answer: ');
  if (userResponse === String(result)) {
    console.log('Correct!');
   } else {
     return console.log(`${userResponse} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${userName}!`)
   }
  }
  console.log(`Congratulations, ${userName}!`);
}

export default commonDivisors;