// let timer;
// let h = 0;
// let m = 0;
// let s = 0;
// function values(params) {
//   return params.toString().length > 1 ? params : `0${params}`;
// }
// let time = (document.getElementById("time").innerHTML = `${values(h)}:${values(
//   m
// )}:${values(s)}`);
// function load() {
//   document.getElementById("time").innerHTML = time;
// }
// function start() {
//   timer = setInterval(() => {
//     s++;
//     if (s === 60) {
//       m++;
//       s = 0;
//     }
//     if (m === 60) {
//       m = 0;
//       h++;
//     }
//     document.getElementById("time").innerHTML = `${values(h)}:${values(
//       m
//     )}:${values(s)}`;
//   }, 1000);
// }
// function pause() {
//   clearInterval(timer);
// }
// function reset() {
//   clearInterval(timer);
//   h = 0;
//   m = 0;
//   s = 0;
//   document.getElementById("time").innerHTML = `${values(h)}:${values(
//     m
//   )}:${values(s)}`;
// }

//

// function checkPalindrome(str) {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
// let count = 0;
// function makePalindrome(string) {
//   const originalString = string;
//   function helper(string) {
//     if (checkPalindrome(string)) {
//       return string;
//     } else {
//       count += 1;
//       return helper(originalString[count] + string);
//     }
//   }
//   return helper(string);
// }

// console.log(makePalindrome("abcd"));

function numDuplicates(name, price, weight) {
  // Write your code here
  let count = 0,
    firstpointer = 0,
    secondPointer = firstpointer + 1,
    dummyObject = {};
  // for (let i=0;i<)
  while (firstpointer < name.length) {
    let firstElement = name[firstpointer];
    let secondElement = name[secondPointer];
    if (firstElement in dummyObject) {
      firstpointer++;
    } else {
      dummyObject = {
        ...dummyObject,
        [firstElement]: dummyObject[firstElement]
          ? dummyObject[firstElement]
          : 1,
      };
      if (
        firstElement === secondElement &&
        price[firstpointer] === price[secondPointer] &&
        weight[firstpointer] === weight[secondPointer]
      ) {
        console.log("firstElement", firstpointer);
        console.log("secondElement", secondPointer);
        count++;
      }

      if (secondPointer >= name.length - 1) {
        firstpointer++;
        secondPointer = firstpointer;
      }
    }
    secondPointer++;
  }
  return count;
}

console.log(
  numDuplicates(
    ["ball", "box", "ball", "ball", "box"],
    [1, 2, 2, 2, 2],
    [1, 2, 1, 1, 3]
  )
);
