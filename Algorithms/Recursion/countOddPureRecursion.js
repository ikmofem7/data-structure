const countOddPureRecursion = (array) => {
  let newArray = [];
  if (array.length === 0) return newArray;
  if (array[0] % 2 !== 0) newArray.push(array[0]);
  newArray = newArray.concat(countOddPureRecursion(array.splice(1)));
  return newArray;
};

console.log(countOddPureRecursion([1, 2, 3, 4, 5, 6]));
