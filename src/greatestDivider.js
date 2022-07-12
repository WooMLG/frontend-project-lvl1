const greatestDivider = (numOne, numTwo) => {
  if (numOne > numTwo && numOne % numTwo === 0) {
    return numTwo;
  }
  if (numTwo > numOne && numTwo % numOne === 0) {
    return numOne;
  }

  let divider = 0;
  let firstNumber = numOne;
  let secondNumber = numTwo;

  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      divider = firstNumber;
      firstNumber = secondNumber;
      secondNumber = divider;
    }
  }

  return divider;
};

export default greatestDivider;
