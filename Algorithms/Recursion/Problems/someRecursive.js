function someRecursive(array, callback) {
  // add whatever parameters you deem necessary - good luck!
  if (array.length === 0) return false;
  if (callback(array[0])) {
    return callback(array[0]);
  }
  return someRecursive(array.slice(1), callback);
}
const isOdd = (val) => val % 2 !== 0;

console.log(someRecursive([4, 6, 8], isOdd));
