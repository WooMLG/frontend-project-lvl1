import getRandomNumber from '../src/randomNumber.js';
import gameBasic from '../src/index.js';
import greatestDivider from '../src/greatestDivider.js';

const gcdGame = () => {
  // условие игры
  const gameTask = 'Find the greatest common divisor of given numbers.';
  // параметры игры
  const gameData = () => {
    // получаем два случайных числа
    const randomNumbers = [getRandomNumber(100), getRandomNumber(100)];
    // составляем пример
    const expression = `${randomNumbers[0]} ${randomNumbers[1]}`;
    // получаем правильный ответ
    const rightAnswer = String(greatestDivider(randomNumbers[0], randomNumbers[1]));

    return [expression, rightAnswer];
  };

  gameBasic(gameTask, gameData);
};

export default gcdGame;
