import getRandomNumber from './randomNumber.js';

const getRandomProgression = () => {
  const stepOfProgression = 1 + getRandomNumber(9);
  const lengthOfProgression = (stepOfProgression < 6) ? 6 : stepOfProgression;
  const result = [getRandomNumber(20)];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    result.push(result[i] + stepOfProgression);
  }
  return result;
};

export default getRandomProgression;
