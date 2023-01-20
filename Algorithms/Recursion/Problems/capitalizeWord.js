function capitalizeWords(array) {
  // add whatever parameters you deem necessary - good luck!
  let newArray = [];
  if (array.length === 0) return newArray;
  newArray.push(array[0].toUpperCase());
  return newArray.concat(capitalizeWords(array.splice(1)));
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
