const validAnagram = (str1, str2) => {
  const str1Obj = {};
  const str2Obj = {};
  if (str1.length !== str2.length) return false;
  for (const element of str1)
    str1Obj[element] = str1Obj[element] ? str1Obj[element] + 1 : 1;
  for (const element of str2)
    str2Obj[element] = str2Obj[element] ? str2Obj[element] + 1 : 1;
  for (let key in str1Obj) {
    if (!(key in str2Obj)) return false;
    if (str1Obj[key] !== str2Obj[key]) return false;
  }
  return true;
};

console.log(validAnagram("ssaad", "sssss"));
