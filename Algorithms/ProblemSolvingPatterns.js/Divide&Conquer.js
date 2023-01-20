const binarySearch = (arr, value) => {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.ceil((min + max) / 2);
    let currentElement = arr[middle];
    if (currentElement < value) min = middle + 1;
    else if (currentElement > value) min = middle - 1;
    else return middle;
  }
  return 1;
};

console.log(binarySearch([1, 2, 3, 5, 6, 9, 10, 20, 34, 66], 9));
