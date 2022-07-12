const greatestDivider = (numOne, numTwo) => {
  let divider = 0;
  if (numOne > numTwo && numOne % numTwo === 0) {
    return numTwo;
  } else if (numTwo > numOne && numTwo % numOne === 0) {
    return numOne;
  }

  while (numOne !== numTwo) {
    if (numOne > numTwo) {
      numOne -= numTwo;
    } else {
      divider = numOne;
      numOne = numTwo;
      numTwo = divider;
    }
  }

  return divider;
};

export default greatestDivider;
