/*
 * filter demo
 * "filter" is used to create a new array that contains a subset
 * of elements of the original array.
 * We can achieve the same using for loop and push function for
 * which the first code snippet has been given. After then the
 * same has been achived using the code snippet following the first snippet.
 * Also, we can make the code more shorter by using lambda function.
 * NOTE:- The filter() method creates an array filled with all array elements
 * that pass a test (provided as a function).
 */

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// console.log(canDrink);

// The below code is more better than the above canDrink for approach.
// Mo need to filter and then push.

// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });

// console.log(canDrink);

// The above code can be made more shorter than the above canDrink filter
// approach using lambda approach. See the below code.

// const canDrink = ages.filter((age) => age >= 21);

// console.log(canDrink);

//Filter retail companies

// const retailCompanies = companies.filter(function (company) {
//   if (company.category === "Retail") {
//     return true;
//   }
// });

// console.log(retailCompanies);

// The below code is more shorter as compared to the above code using lambda.

// const retailCompanies = companies.filter(
//   (company) => company.category === "Retail"
// );

// console.log(retailCompanies);

// Filter Technology Companies

// const technologyCompanies = companies.filter(
//   (company) => company.category === "Technology"
// );

// console.log(technologyCompanies);

// Get 80s companies

// const eightiesCompanies = companies.filter(
//   (company) => company.start >= 1980 && company.start < 1990
// );

// console.log(eightiesCompanies);

// Get companies which lasted 10years.

// const lastedTenYears = companies.filter(
//   (company) => company.end - company.start >= 10
// );

// console.log(lastedTenYears);
