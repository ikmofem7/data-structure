var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

function nestedEvenSum(obj) {
  let total = 0;

  (function helper(obj) {
    for (let key in obj) {
      const element = obj[key];
      if (typeof element === "object") {
        helper(element);
      } else if (typeof element === "number" && element % 2 === 0) {
        total += element;
      }
    }
  })(obj);

  return total;
}

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
