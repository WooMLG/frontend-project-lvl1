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
    const operationType = ['+', '*', '-'];
    // составляем пример
    const expression = `${randomNumbers[0]} ${operationType[getRandomNumber(3)]} ${randomNumbers[1]}`;
    // получаем правильный ответ
    const rightAnswer = String(eval(expression));

    return [expression, rightAnswer];
  };

  gameBasic(gameTask, gameData);
};

export default calcGame;
