function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > currentValue) {
        arr[i] = arr[j];
      }
    }
  }
  return arr;
}

console.log(insertionSort([5, 3, 1, 2, 4]));

//Hi swetha
// i have checked products and i think it will be great to work on the products
// if i get a chance to join it will be helpful in my career growth
// i will be great asset to team 
// feel my skills are particularly well-suited to this position 
// I believe I have the type of knowledge to succeed in this role