function alphabeticBinarySearch(array, value) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (array[middle] !== value && start <= end) {
    if (array[middle] > value) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return array[middle] === value ? middle : -1;
}

console.log(
  alphabeticBinarySearch("abcdefghijklmnopqrstuvwxyz".split(""), "x")
);
