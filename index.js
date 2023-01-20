function sum(array) {
  return array.reduce((total, accu) => {
    return accu + total;
  }, 0);
}

// console.log(sum([3, 5, 6]));

// function addUpTo(params) {
//   let total = 0;
//   for (let index = 1; index <= params; index++) {
//     total += index;
//   }
//   return total;
// }

// const t1 = performance.now();
// console.log(addUpTo(10000000));
// const t2 = performance.now();
// console.log(`Time taken is ${Math.ceil((t2 - t1) / 1000)} secs`);

// function shortHandAddUpto(params) {
//   return (params * (params + 1)) / 2;
// }
// const t3 = performance.now();
// console.log(shortHandAddUpto(10000000));
// const t4 = performance.now();
// console.log(`Time taken is ${Math.ceil((t4 - t3) / 1000)} secs`);

// let x = new Array();
// let y = new Array();
// x[1] = 4;
// y[2] = 6;
// console.log(x, y);
// x = y;
// console.log(x, y);

// function logAtleast5(n) {
//   for (let i = 0; i <= Math.max(5, n); i++) {
//     console.log(i);
//   }
// }

// console.log(logAtleast5(1));

// const num = 2 ** 4;
// console.log("num", num);

// program to check if the string is palindrome or not

function checkPalindrome(str) {
  // find the length of a string
  const len = str.length;

  // loop through half of the str
  for (let i = 0; i < len / 2; i++) {
    // check if first and last str are same
    if (str[i] !== str[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

// // take input
// const string = prompt("Enter a string: ");
// console.log(typeof string);
// // call the function
const value = checkPalindrome("madam");

console.log(value);

let s = "supdddefffrrrsdd";
// var result = [...s].reduce((a, e) => {
//   console.log(!a[e]);
//   a[e] = a[e] ? a[e] + 1 : 1;
//   return a;
// }, {});
let obj = {};
for (let i = 0; i < s.length; i++) {
  obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1;
}
console.log(obj);
const array = Object.entries(obj).filter(([key, value]) => {
  if (value >= 3) {
    let str = "";
    for (let index = 0; index < 3; index++) {
      str += key;
    }
    s = s.replace(str.toString(), "");
    return key;
  }
});
console.log(s);
// console.log(result); // {h: 1, e: 1, l: 2, o: 1}

for (const element of s) {
  console.log("element", element);
}
