function countUniqueValues(array) {
  let firstpointer = 0;
  let secondPointer = firstpointer + 1;
  if (!array.length) {
    return firstpointer;
  }
  function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  }
  while (secondPointer < array.length) {
    let firstElement = array[firstpointer];
    let secondElement = array[secondPointer];
    if (firstElement < secondElement) {
      arraymove(array, secondPointer, firstpointer + 1);
      console.log(array);
      firstpointer++;
    }
    secondPointer++;
  }
  return firstpointer + 1;
}

console.log(countUniqueValues([]));
