// Write a recursive function that will return the sum of all the numbers in the given object.
// Note: The given object contains more objects in it.
// const Input = {
//   a: 5,
//   b: { ba: 10, bb: { bba: { bbb: 20 } }, bc: { bca: 25 } },
//   c: 5,
// };
// // Output: 20

// function addValue(obj) {
//   let total = 0;

//   function helper(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] === "number") {
//         total += obj[key];
//       } else {
//         helper(obj[key]);
//       }
//     }
//   }
//   helper(obj);
//   return total;
// }

// console.log(addValue(Input));

// const array = [1, 3, 4, 5, 6, 10, 12, 34, 45];
// // const array = [45, 34, 12, 10, 6, 5, 4, 3, 1];
// // 0  1  2  3  4  5   6   7
// function binarySearch(array, value) {
//   let start = 0;
//   let end = array.length - 1;
//   let middle = Math.floor(array.length / 2);

//   while (array[middle] !== value && start < end) {
//     if (array[middle] < value) {
//       start = middle;
//     } else if (array[middle] > value) {
//       end = middle;
//     } else {
//       start++;
//     }
//     console.log("start", start);
//     console.log("end", end);
//     middle = Math.floor((start + end) / 2);
//     console.log("middle", middle);
//   }
//   if (start !== array.length - 1) {
//     return `${value} is present`;
//   } else {
//     return `${value} is not present`;
//   }
// }
// console.log(binarySearch(array, 10));

// function example(value) {
//   return new Promise((resolve, reject) => {
//     if (value) {
//       resolve(true);
//     } else {
//       reject("error");
//     }
//   });
// }

// example.then((res) => console.log(res)).catch();

function setInt(fn, time, stopTime, currentTime = 0) {
  let stop = false;
  setTimeout(() => {
    console.log(stop);
    if (stopTime >= currentTime) {
      return setInt(fn, time, stopTime, currentTime + 1000);
    }
  }, time);
}
let cus = setInt(console.log("11"), 1000, 3000);
function clearInt(value) {
  value = "";
}
console.log(cus);
clearInt(cus);
console.log(cus);
console.log(setInt(console.log("11"), 1000, 3000));

function secondLargestNumber(array) {
  let firstLargest = array[0];
  let secondLargest = array[0];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element > firstLargest) {
      if (firstLargest > secondLargest) {
        secondLargest = firstLargest;
      }
      firstLargest = element;
    }
  }
  console.log("firstLargest", firstLargest);
  console.log("secondLargest", secondLargest);
}

secondLargestNumber([5, 9, 21, 6, 8, 99]);
