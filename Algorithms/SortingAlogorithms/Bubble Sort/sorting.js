[5, 4, 15, 10].sort((a, b) => {
  return a - b;
});

console.log(
  ["Colt", "Data Structure", "Steele", "Algorithm"].sort(
    (a, b) => a.length - b.length
  )
);
