let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

function stringifyNumbers(obj) {
  let dummyObject = {};
  //   (function helper(obj) {
  //     for (let key in obj) {
  //       let element = obj[key];
  //       if (typeof element === "number") {
  //         console.log(key);
  //         console.log(element);
  //         console.log(obj);
  //         obj[key] = obj[key].toString() + "ss";
  //       } else if (typeof element === "object" && !Array.isArray(element)) {
  //         console.log("else", element);
  //         console.log("else", obj);
  //         helper(element);
  //       }
  //     }
  //   })(obj);

  for (let key in obj) {
    let element = obj[key];
    if (typeof element === "number") {
      dummyObject[key] = element.toString();
    } else if (typeof element === "object" && !Array.isArray(element)) {
      dummyObject[key] = stringifyNumbers(element);
    } else {
      dummyObject[key] = element;
    }
  }

  return dummyObject;
}

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
