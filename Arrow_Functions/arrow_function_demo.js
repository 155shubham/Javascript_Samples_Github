/*
 * Demo-1
 * Normal javascript function when returning only one statement
 */
function_1 = function () {
  return "Demo-1";
};
console.log(function_1());

/*
 * Demo-2
 * Arrow function when returning only one statement
 * Note: No need to use return keyword when returning only one statement
 */
function_2 = () => "Demo-2";
console.log(function_2());

/*
 * Demo-3
 * Normal javascript function with return and only one statement
 */
function_3 = function () {
  var x = "Demo-3";
  console.log(x);
};
function_3();

/*
 * Demo-4
 * Arrow function with more than one statement
 * Note: Need to use return keyword when using more than one statement
 */
function_4 = () => {
  var x = "Demo-4";
  console.log(x);
};
function_4();

/*
 * Demo-5
 * Normal function with one parameter
 */
function_5 = function (param) {
  var x = "Demo-5";
  console.log(`${x + param}`);
};
function_5(" param");

/*
 * Demo-6
 * Arrow function with one parameter
 */
function_6 = (param) => {
  var x = "Demo-6";
  console.log(`${x + param}`);
};
function_6(" param");

/*
 * Demo-7
 * Normal function with more than one parameter
 */
function_7 = function (param1, param2) {
  var x = "Demo-7";
  console.log(`${x + param1 + param2}`);
};
function_7(" param1", " param2");

/*
 * Demo-8
 * Arrow function with more than one parameter
 */
function_8 = (param1, param2) => {
  var x = "Demo-8";
  console.log(`${x + param1 + param2}`);
};
function_8(" param1", " param2");
