const collectOddValues = (array) => {
  const result = [];

  const helper = (helperInput) => {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
    helper(helperInput.splice(1));
  };
  helper(array);
  return result;
};

console.log(collectOddValues([1, 2, 3, 4, 5]));
