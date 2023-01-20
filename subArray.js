// // function partitionArray(k, number) {
// //   let firstPointer = 0;
// //   let secondPointer = k - 1;
// //   // let subArray = []
// //   while (firstPointer < number.length) {
// //     if (firstPointer === secondPointer) {
// //       secondPointer += k;
// //     }
// //     if (number[firstPointer] === number[secondPointer]) {
// //       return "No";
// //     }
// //     firstPointer++;
// //   }
// //   return "yes";
// // }

// // console.log(partitionArray(2, [1, 2, 2, 4]));

// // group anagrams together
// // Input: ["eat", "tea", "cat" , "act", "bat"]
// // o/p: [ ["eat", "tea"],["cat", "act"],["bat"] ]

// // const input = ["eat", "tea", "cat", "act", "bat"];

// // function groupAnagram(array) {
// //   for (let i = 0; i < array.length; i++) {
// //     // eat
// //     for (let j = 0; j < array[i].length; j++) {
// //       // console.log(array[i][j]); //e
// //       if (array[i + 1]) {
// //         const findElement = array[i + 1]
// //           .split("")
// //           .find((element) => element === array[i][j]);
// //         console.log("findElement", findElement);
// //         // if (!findElement) break;
// //         console.log(j);
// //       }

// //       // if (array[i + 1]) {
// //       //   for (let z = 0; z < array[i + 1].length; z++) {
// //       //     console.log(array[i + 1][j]); //t
// //       //     const findElement = array[i + 1]
// //       //       .split("")
// //       //       .find((element) => element === array[i][j]);
// //       //     console.log("findElement", findElement);
// //       //     // break;
// //       //   }
// //       // }

// //       // break;
// //     }
// //   }
// // }

// // groupAnagram(input);

// // palindrome
// // input:madiam
// // output:"palindrome"
// let count = 0;
// function checkPalindrome(string) {
//   console.log(string.length);
//   for (let i = 0; i <= string.length / 2; i++) {
//     console.log(string[i], string.length);
//     // console.log(string[string.length - 1 - i]);
//     if (string[i] !== string[string.length - 1 - i]) {
//       if (!count) {
//         count = 1;
//         const newString = string.slice(0, i + 1) + string.slice(i + 2);
//         checkPalindrome(newString);
//       } else return "Not Palindrome";
//     }
//   }
//   return "Palindrome";
// }
// console.log(checkPalindrome("madiam"));


//sum
// sum(109)(432)(86)(35)(0)()
// sum(1)(2)(5)()
// sum(1)(2)(5)(123)(78)(…)()  No matter how many arguments we pass, it will have to summate all of them and return the result

