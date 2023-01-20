const sumUp = (array, num) => {
  if (!array.length) return null;

  let max = -Infinity;
  for (let i = 0; i <= array.length - num; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += array[i + j];
    }
    if (temp > max) max = temp;
  }
  return max;
};

// console.log(sumUp([1, 2, 5, 9, 4, 2], 4));

/* Consist of two arguement array and number*/

const reFactoredSlidingWindow = (array, num) => {
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < num; i++) maxSum += array[i];
  tempSum = maxSum;
  console.log("tempSum", tempSum);
  for (let j = num; j < array.length; j++) {
    console.log("j", j);
    tempSum = tempSum - array[j - num] + array[j];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};

console.log(reFactoredSlidingWindow([1, 2, 5, 9, 4, 2], 2));

// const palindrome = (str) => {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] != str[str.length - 1 - i]) {
//       return "It's not a palindrome";
//     }
//   }
//   return "It's a palindrome";
// };
// console.log(palindrome("poop"));
