function bubbleSort(arr) {
  let noSwap;
  for (let i = arr.length - 1; i >= 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] < arr[j - 1]) {
        var temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([5, 3, 1, 4, 2]));
