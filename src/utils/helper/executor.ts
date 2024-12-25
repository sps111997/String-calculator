export const getNumberFromString = (string: string) => {
  const numberArray = string.match(/-?\d+/g);

  return !numberArray ? [0] : numberArray.map((val)=>parseInt(val,10));
};

export const sumCalculatorOnlyPositiveNumber = (numberArray: number[]) => {
  let sum = 0;
  const negativeNumber = [];
  numberArray.forEach((val) => {
    if (val < 0) {
      negativeNumber.push(val);
    } else {
      sum += val;
    }
  });
  if(negativeNumber.length){
    throw new Error(`negatives numbers are  not allowed: ${negativeNumber.join(', ')}`);
  }
  else{
    return sum;
  }
};

export const stringCalculator = (string: string):number => {
  const numberArray = getNumberFromString(string);
  return sumCalculatorOnlyPositiveNumber(numberArray);
}
