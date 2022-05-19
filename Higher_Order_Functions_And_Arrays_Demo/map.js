/*
 * map demo
 * "map" takes an array, transform its elements, and include
 * the results in a new array.
 * NOTE:- The map() method creates a new array with the results
 * of calling a function for every array element.
 */

// Create array of company names

// const companyNames = companies.map(function (company) {
//   return company.name;
// });

// console.log(companyNames);

// Create array of company names using lambda

// const companyNames = companies.map((cmpny) => cmpny.name);

// console.log(companyNames);

// const testMap1 = companies.map(function (cmpny) {
//   return 1;
// });

// console.log(testMap1);

// const testMap1 = companies.map((cmpny) => 1);

// console.log(testMap1);

// const testMap2 = companies.map(function (cmpny) {
//   return `${cmpny.name} [${cmpny.start} - ${cmpny.end}]`;
// });

// console.log(testMap2);

const testMap2 = companies.map(
  (cmpny) => `${cmpny.name} [${cmpny.start} - ${cmpny.end}]`
);

console.log(testMap2);

// const testMap2 = companies.map()
// Create array of square roots of ages

// const agesSquare = ages.map(function (age) {
//   return Math.sqrt(age);
// });

// console.log(agesSquare);

const 