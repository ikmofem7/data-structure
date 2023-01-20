function flatten(array) {
  return array.reduce((f, i) => {
    return f.concat(Array.isArray(i) ? flatten(i) : i);
  }, []);
}

console.log(flatten([1, [2]]));
