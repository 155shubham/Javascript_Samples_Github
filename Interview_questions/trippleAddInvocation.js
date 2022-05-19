// function trippleAdd(a){
//     return a + trippleAdd()
// }

// function trippleAdd() {
//   let i = 0;
//   [10, 20, 30].forEach((x) => {
//     i = i + x;
//   });
//   console.log(i);
// }
// trippleAdd();

function trippleAdd(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}
let value = trippleAdd(10)(20)(30);
console.log(value);
