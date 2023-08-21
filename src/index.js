import readlineSync from 'readline-sync';

const userGreetingInTheGame = console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
const rounds = 3;
const correctAnswer = 'Correct!';


export { userName, rounds, correctAnswer};
