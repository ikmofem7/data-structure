function bubbleSortExample(array) {
  let noSwap;
  for (let i = array.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return array;
}

console.log(bubbleSortExample([32, 47, 12, 8, 99, 16]));
