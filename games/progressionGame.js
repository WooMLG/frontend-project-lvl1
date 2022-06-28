import getRandomNumber from '../src/randomNumber.js';
import gameBasic from '../src/index.js';
import getRandomProgression from '../src/getRandomProgression.js';

const progressionGame = () => {
  const gameTask = 'What number is missing in the progression?';

  const gameData = () => {
    const randomProgression = getRandomProgression();

    const lengthOfProgression = randomProgression.length - 1;

    const indexOfElement = getRandomNumber(lengthOfProgression);

    const rightAnswer = String(randomProgression[indexOfElement]);

    randomProgression[indexOfElement] = '..';

    return [randomProgression, rightAnswer];
  };

  gameBasic(gameTask, gameData);
};

export default progressionGame;
