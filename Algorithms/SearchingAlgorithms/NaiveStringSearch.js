function stringSearch(str, pattern) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let inner = 0; inner < pattern.length; inner++) {
      if (pattern[inner] !== str[i + inner]) break;
      if (inner === pattern.length - 1) count++;
    }
  }
  return count;
}

console.log(stringSearch("lorie loled", "lol"));
