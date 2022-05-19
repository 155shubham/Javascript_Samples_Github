/*
 * forEach demo
 * "forEach" is used to loop over all the elements till the length given
 * like for loop but it looks more better as comapred to forEach.
 * Thats why here for loop example has been mentioned first and then
 * forEach loop to be compared.
 * Also, we can make the code more shorter by using lambda function.
 */

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// The below code looks more better than the above for loop.

// companies.forEach(function (company) {
//   console.log(company);
// });

// This below code is more shorter than the above for foreach because of lambda.

// companies.forEach((company) => console.log(company.ages));

// Foreach provides other options as arguments such as "index" of the array
// and also the whole arrray ("companies") also.

// companies.forEach((company, index, companies) =>
//   console.log(company.category + " " + index + " " + companies.length)
// );
