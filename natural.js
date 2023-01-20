function numberOfPairs(n) {
  // Stores the count of
  // pairs
  let count = [];

  // Set the two pointers
  let i = 1,
    j = n - 1;

  while (i <= j) {
    // Check if the sum of
    // pairs is equal to N
    if (i + j == n) {
      // Increase the count
      // of pairs
      count[count.length] = { i, j };
    }

    // Move to the next pair
    i++;
    j--;
  }

  const sumIndividualNumber = (number) =>
    number
      .toString()
      .split("")
      .reduce((accu, curr) => +accu + +curr, 0);
  const addPairs = count.map(
    (element) => sumIndividualNumber(element.i) + sumIndividualNumber(element.j)
  );
  const sortNumbers = addPairs.sort((a, b) => a - b);
  console.log(sortNumbers);
  return sortNumbers[0];
}

// Driver code
let n = 20;

document.write(numberOfPairs(n));
