import getRandomNumber from '../src/randomNumber.js';
import gameBasic from '../src/index.js';

const getEven = () => {
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

  const gameData = () => {
    const randomNumber = getRandomNumber(100);

    const rightAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';

    return [randomNumber, rightAnswer];
  };

  gameBasic(gameTask, gameData);
};

export default getEven;
