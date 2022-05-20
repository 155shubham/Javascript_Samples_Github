/*
    slice() method in javascript
*/
const fruits = ["Banana", "Apple", "Lemon", "Mango", "Guava"];

let fruits_slice0 = fruits.slice();
console.log(fruits_slice0); // [ 'Banana', 'Apple', 'Lemon', 'Mango', 'Guava' ]

let fruits_slice1 = fruits.slice(2);
console.log(fruits_slice1); // [ 'Lemon', 'Mango', 'Guava' ]

let fruits_slice2 = fruits.slice(2, 3);
console.log(fruits_slice2); // [ 'Lemon' ]

let fruits_slice3 = fruits.slice(1, 4);
console.log(fruits_slice3); // [ 'Apple', 'Lemon', 'Mango' ]

let fruits_slice4 = fruits.slice(4, 1);
console.log(fruits_slice4); // []

let fruits_slice5 = fruits.slice(-1);
console.log(fruits_slice5); // [ 'Guava' ]

let fruits_slice6 = fruits.slice(-3, -1);
console.log(fruits_slice6); // [ 'Lemon', 'Mango' ]
