function capitalizeFirst(array) {
  let newArray = [];
  if (array.length === 0) return newArray;
  let i = array[0];
  newArray.push(i.charAt(0).toUpperCase() + i.slice(1));
  return newArray.concat(capitalizeFirst(array.splice(1)));
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
