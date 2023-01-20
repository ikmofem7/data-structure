function factorial(num) {
  let dummyNum = num;
  for (let index = num - 1; index > 0; index--) {
    dummyNum *= index;
  }
  return dummyNum;
}

console.log(factorial(5));

const recursiveFactorial = (num) => {
  if (num === 1) return 1;
  return num * recursiveFactorial(num - 1);
};
console.log(recursiveFactorial(5));
