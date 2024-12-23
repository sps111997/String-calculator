export const getNumberFromString = (string: string) => {
  const numberArray = string.match(/-?\d+/g);

  return !numberArray ? [0] : numberArray.map((val)=>parseInt(val,10));
};

export const sumCalculatorOnlyPositiveNumber = (numberArray: number[]) => {
  let sum = 0;
  numberArray.forEach((val) => {
    if (val < 0) {
      throw new Error("Only positive number valid");
    } else {
      sum += val;
    }
  });
  return sum;
};

export const stringCalculator = (string: string):number => {
  const numberArray = getNumberFromString(string);
  return sumCalculatorOnlyPositiveNumber(numberArray);
}
