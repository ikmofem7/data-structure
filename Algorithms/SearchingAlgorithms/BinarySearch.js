function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (arr[middle] !== value && left <= right) {
    if (arr[middle] > value) right = middle - 1;
    else left = middle + 1;
    middle = Math.floor((left + right) / 2);
  }
  if (arr[middle] === value) return middle;
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));
