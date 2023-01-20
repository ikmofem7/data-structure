let dummyArray = [];
function arrayLinear(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (Array.isArray(element)) {
      arrayLinear(element);
    } else {
      dummyArray.push(element);
    }
  }
  return dummyArray;
}

// console.log(arrayLinear([1, 2, 3, [4, [5, [6]]]]));

const recursiveArrayLinear = (array) =>
  array.reduce((f, i) => {
    return f.concat(Array.isArray(i) ? recursiveArrayLinear(i) : i);
  }, []);

// console.log(recursiveArrayLinear([1, 2, 3, [4, 5]]));

const helperRecursiveMehod = (array) => {
  const dummyArray = [];
  (function helper(array) {
    if (array.length === 0) return;
    if (Array.isArray(array[0])) {
      return helper(array[0]);
    }
    dummyArray.push(array[0]);
    console.log(array);
    helper(array.slice(1));
  })(array);
  return dummyArray;
};

console.log(helperRecursiveMehod([1, 2, 3, [4, [5, [6]]]]));

function fibonacciSeries(value) {
  let n1 = 0,
    n2 = 1,
    nextTerm;

  for (let i = 0; i <= value; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}

fibonacciSeries(10);
