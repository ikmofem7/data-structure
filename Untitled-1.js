// // // // key should be only string
// // // // value alpha numeric or objects
// // // // value float and array not allowed

// const { useEffect } = require("react");

// // // const input = '{"hello":"super","address":{"no":"123","ok":{"oops":"kia"}}}';

// // // function checkObject(string) {
// // //   eval("var obj=" + string);
// // //   let result = true;
// // //   function helper(obj) {
// // //     for (let key in obj) {
// // //       const element = obj[key];
// // //       if (!isNaN(parseInt(key))) {
// // //       } else if (typeof element === "object" && !Array.isArray(element)) {
// // //         helper(element);
// // //       } else {
// // //         const array = Array.isArray(element);
// // //         function isFloat(n) {
// // //           return Number(n) === n && n % 1 !== 0;
// // //         }
// // //         const checkFloat = !isNaN(element) && isFloat(+element);
// // //         if (array || checkFloat) {
// // //           result = false;
// // //           return false;
// // //         }
// // //       }
// // //     }
// // //   }
// // //   helper(obj);
// // //   return result;
// // // }

// // // console.log(checkObject(input));

// // // // uzma.khan0@walmart.com

// // // Write a program to find second highest number:
// // // I/P

// // // const arr = [5, 9, 6, 8, 4, 3, 9, 6, 5, 7, 1, 3];

// // // function findSecondHighest(array) {
// // //   const sortedArray = array.sort((a, b) => a - b);
// // //   const removingDuplicates = new Set(array);
// // //   const elements = [...removingDuplicates];
// // //   return elements[removingDuplicates.size - 2];
// // // }
// // // console.log(findSecondHighest(arr));

// // // Print the first “n” prime numbers. N is anything a user might enter.
// // //   Example n = 5 Output is 2,3,5,7,11
// // //   Example n = 8 Output is 2,3,5,7,11,13,17,19.

// // // function primeFactorsTo(max) {
// // //   var store = [],
// // //     i,
// // //     j,
// // //     primes = [];
// // //   for (i = 2; i <= max; ++i) {
// // //     if (!store[i]) {
// // //       primes.push(i);
// // //       for (j = i << 1; j <= max; j += i) {
// // //         store[j] = true;
// // //       }
// // //     }
// // //   }
// // //   return primes;
// // // }

// // function isPrime(num) {
// //   for (var i = 2; i < num; i++) {
// //     console.log(i);
// //     if (num % i === 0) {
// //       return false;
// //     }
// //   }
// //   return true;
// // }
// // console.log(isPrime(5));

// // function display(n) {
// //   var arr = [2];
// //   for (var i = 3; i < n; i += 2) {
// //     if (isPrime(i)) {
// //       arr.push(i);
// //     }
// //   }
// //   console.log(arr); // use arr result on your own
// // }

// // // display(100);

// // // console.log(primeFactorsTo(5));

// // // pranav.patwardhan@neosofttech.com
// // //
// // // primeNumbers(5)

// // if (indexedDB in window) {
// //   dbSupport = true;
// // }

// function sum(params) {
//   let total = 0;
//   return (second) => {
//     if (second || second === 0) {
//       console.log(second);
//       return sum(params + second);
//     }
//     return params;
//   };
// }

// console.log(sum(432)(86)(33)(0)());

// async function something() {
//   console.log("1"); //first

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("2");
//       resolve("done!");
//     }, 100);
//   });

//   // await promise;

//   setTimeout(() => {
//     console.log("3");
//   }, 100);

//   console.log("4");
// }

// something();
// console.log("5");
// //1
// // 2
// // 4
// // 5
// // 3

// useEffect(() => {
//   return () => console.log();
// }, []);
