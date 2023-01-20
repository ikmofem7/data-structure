function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    // o(n)
    let correctIndex = arr2.indexOf(arr1[i] ** 2); //o(n)
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3, 2, 5, 6], [4, 1, 9, 4, 36, 25]));

/* Refactor Function*/

const refactorSame = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let element of arr1) {
    // console.log("element", frequencyCounter1[element]);
    frequencyCounter1[element] = frequencyCounter1[element]
      ? frequencyCounter1[element] + 1
      : 1;
  }
  for (let element of arr2) {
    frequencyCounter2[element] = frequencyCounter2[element]
      ? frequencyCounter2[element] + 1
      : 1;
  }
  //o(n)
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false;
  }
  return true;
};

console.log(refactorSame([1, 2, 3, 2, 5, 5], [4, 1, 9, 4, 36, 25]));
