// // During a simple invocation the value of this equals to the global object
// // (or undefined if the function runs in strict mode):
// "use strict";

// function myFunction() {
//   console.log(this);
// }
// // Simple invocation
// myFunction(); // logs global object (window)

// // Invoking a Function as a Method
// // In JavaScript you can define functions as object methods.

// // The following example creates an object (myObject),
// // with two properties (firstName and lastName), and a method (fullName):
// const myObject = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
//   full: () => {
//     console.log(this);
//   },
// };
// myObject.fullName(); // Will return "John Doe"
// myObject.full(); // Will return "John Doe"

// // During an indirect invocation using myFunc.call(thisVal, arg1, ..., argN)
// // or myFunc.apply(thisVal, [arg1, ..., argN])
// // the value of this equals to the first argument:
// function myFunction() {
//   console.log(this);
// }
// const myContext = { value: "A" };
// myFunction.call(myContext); // logs { value: 'A' }
// myFunction.apply(myContext); // logs { value: 'A' }

// // call
// let obj = { food: "Pizza" };

// function favFood(text, b) {
//   console.log(`${this.food} ${text}`);
// }

// let text = ["is awesome!", "sss"];
// favFood.call(obj, text); // "Pizza is awesome!"

const twice = (f, v) => f(f(v));
const add3 = (v) => v + 3;
console.log(twice(add3, 7));
