const productOfArray = (array) => {
  let total = 1;

  function helper(array) {
    if (array.length == 0) return total;
    total *= array[0];
    helper(array.splice(1));
  }
  helper(array);
  return total;
};

const pureProduct = (array) => {
  if (array.length == 0) return 1;
  return array[0] * pureProduct(array.slice(1));
};

console.log(productOfArray([1, 2, 3, 10]));
// 1*pureProduct([2,3])
//    2*pureProduct([3])
//      3*pureProduct([])
//        1
