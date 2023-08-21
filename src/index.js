import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
const rounds = 3;
const correctAnswer = 'Correct!';
const congratulations = 'Congratulations,';

export {
  userName,
  rounds,
  correctAnswer,
  congratulations,
};
