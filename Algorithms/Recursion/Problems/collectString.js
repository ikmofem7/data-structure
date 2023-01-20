const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

function collectStrings(obj) {
  let array = [];
  (function helper(obj) {
    for (let key in obj) {
      const element = obj[key];
      if (typeof element === "string") {
        array[array.length] = element;
      } else if (typeof element === "object" && !Array.isArray(element))
        helper(element);
    }
  })(obj);
  return array;
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
