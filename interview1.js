// let time;
// let degree = 0;
// function rotate() {
//   const input = document.getElementById("input").value;
//   let image = document.getElementById("image");
//   time = setInterval(() => {
//     degree += 15;
//     image.style.transform = `rotate(${degree}deg)`;
//   }, 1000);

//   //   image.style.width = `50px`;
// }

let str = "name";
let strArray = str.split("");
let newArray = [];
for (let index = strArray.length - 1; index >= 0; index--) {
  const element = strArray[index];
  console.log(element);
  newArray.push(element);
}
console.log(newArray.join(""));
