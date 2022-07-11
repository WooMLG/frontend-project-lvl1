import getRandomNumber from '../src/randomNumber.js';
import gameBasic from '../src/index.js';
import isNumberPrime from '../src/isNumberPrime.js';

const primeGame = () => {
  const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no"';

  const gameData = () => {
    const randomNumber = getRandomNumber(500);

    const rightAnswer = isNumberPrime(randomNumber);

    return [randomNumber, rightAnswer];
  };

  gameBasic(gameTask, gameData);
};

export default primeGame;
