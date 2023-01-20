function sumPairsZero(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) return [array[i], array[j]];
    }
  }
}

console.log(sumPairsZero([-4, -2, -1, 0, 1, 3]));

// Using multi pointer

function multiPointer(array) {
  let start = 0,
    end = array.length - 1;
  while (end > start) {
    let sum = array[start] + array[end];
    if (sum === 0) {
      return [array[start], array[end]];
    } else if (sum > 0) {
      end--;
    } else {
      start++;
    }
  }
}
console.log(multiPointer([-4, -3, -2, -1, 0, 1, 2, 5, 7, 10]));
