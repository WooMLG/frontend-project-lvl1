const greatestDivider = (num1, num2) => {
  let divider = 0;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      divider = num1;
      num1 = num2;
      num2 = divider;
    }
  }

  return divider;
};

export default greatestDivider;
