import readlineSync from 'readline-sync';

export const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?: ');

// Функция получения целого, случайного числа
const getRandomNumber = (max) => Math.floor(Math.random() * max);

// Реализация игры проверка на четсность
export const getEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    // Выводим число на экран
    const num = getRandomNumber(20);
    console.log(`Question: ${num}`);

    // Ответ игрока
    const getAnswerUser = readlineSync.question('Your answer: ');

    // Определяем чет/нечет
    const evenNum = (num % 2 === 0) ? 'yes' : 'no';

    // Выполняем проверку
    if (getAnswerUser === evenNum) {
      console.log('Correct!');
    } else {
      console.log(`"${getAnswerUser}" is wrong answer ;(. Correct answer was "${evenNum}"`);
      return console.log(`Let's try again ${name}`);
    }
  }

  return console.log(`Congratulations, ${name}`);
};
