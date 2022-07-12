import getRandomNumber from '../src/randomNumber.js';
import gameBasic from '../src/index.js';

const calcGame = () => {
  // условие игры
  const gameTask = 'What is the result of the expression?';
  // параметры игры
  const gameData = () => {
    // получаем два случайных числа
    const randomNumbers = [getRandomNumber(100), getRandomNumber(100)];
    // определем вид алгебрарической операции
    const operationTypes = ['+', '*', '-'];
    const operationType = operationTypes[getRandomNumber(3)];
    // составляем пример
    const expression = `${randomNumbers[0]} ${operationType} ${randomNumbers[1]}`;
    // получаем правильный ответ
    const rightAnswer = () => {
      let result = 0;
      if (operationType === '+') {
        result = randomNumbers[0] + randomNumbers[1];
      } else if (operationType === '*') {
        result = randomNumbers[0] * randomNumbers[1];
      } else if (operationType === '-') {
        result = randomNumbers[0] - randomNumbers[1];
      }
      return String(result);
    };

    return [expression, rightAnswer()];
  };

  gameBasic(gameTask, gameData);
};

export default calcGame;
