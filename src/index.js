import readlineSync from 'readline-sync';

// приветствие
const gameBasic = (gameRule, gameData) => {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?: ');
  console.log(`Hello, ${name}!`);

  console.log(gameRule);

  for (let i = 0; i < 3; i += 1) {
    const gameElements = gameData();

    console.log(`Question: ${gameElements[0]}`);

    const getAnswer = readlineSync.question('Your answer: ');

    const theAnswer = gameElements[1];

    if (getAnswer === theAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${getAnswer}" is wrong answer ;(. Correct answer was "${theAnswer}"`);

      return console.log(`Let's try again ${name}`);
    }
  }

  return console.log(`Congratulations, ${name}`);
};

export default gameBasic;
