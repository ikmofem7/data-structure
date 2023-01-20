/* Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
andchecks whether there are any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:
areThereDuplicates(1,2,3) //false
areThereDuplicates(1,2,2) //true
areThereDuplicates('a','b','c','a') //true

*/
//Frequency Counter Pattern
const areThereDuplicates = (...args) => {
  let object = {};
  for (let element of args) {
    object[element] = (object[element] || 0) + 1;
  }
  for (let key in object) {
    if (object[key] > 1) return true;
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 3, 2));

//Multi Pointer Pattern

const multiPointer = (...args) => {
  let firstPointer = 0;
  let secondPointer = firstPointer + 1;

  while (firstPointer < args.length) {
    let firstElement = args[firstPointer];
    let secondElement = args[secondPointer];
    if (secondElement === firstElement) return true;
    if (secondPointer === args.length - 1) {
      firstPointer++;
      secondPointer = firstPointer;
    }
    if (firstPointer === args.length - 1) {
      return false;
    }
    secondPointer++;
  }
  return false;
};

function oneLinerPointer(...arguments) {
  return new Set(arguments).size !== arguments.length;
}



// function validAnswer(...args) {
//   // Two pointers
//   args.sort((a, b) => a > b);
//   let start = 0;
//   let next = 1;
//   while (next < args.length) {
//     if (args[start] === args[next]) {
//       return true
//     }
//     start++
//     next++
//   }
//   return false
// }
// console.log(multiPointer("a", "b", "c"));
console.log(oneLinerPointer("a", "b", "c"));
