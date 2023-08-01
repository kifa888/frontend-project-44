import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
const rounds = 3;
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export { userName, rounds, getRandomNumber };
