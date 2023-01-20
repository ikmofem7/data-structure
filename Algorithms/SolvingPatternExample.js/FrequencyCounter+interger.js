const sameFrequency = (num1, num2) => {
  const str1 = num1.toString();
  const str2 = num2.toString();
  if (str1.length !== str2.length) return false;
  let firstObj = {};
  let secondObj = {};
  for (let element of str1) {
    firstObj[element] = (firstObj[element] || 0) + 1;
  }
  for (let element of str2) {
    secondObj[element] = (secondObj[element] || 0) + 1;
  }
  for (let key in firstObj) {
    if (!(key in secondObj)) return false;
    if (firstObj[key] !== secondObj[key]) return false;
  }
  return true;
};

console.log(sameFrequency(222, 222));
