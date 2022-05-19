/*
 * The below code logs "window" and "this" objects.
 * Global object is called "window" in case of any browser.
 * Also whatever functions or variables you see in "window" or "this" object can be accesses globally.
 * Javascript engine is responsible for generating "this" or "window" object.
 * In chrome, V8 engine will generate this window object.
 * In Mozilla, it has different engine which generates this code.
 * In IE, there is a different javascript engine and so on... for different browsers.
 */
console.log(window);
console.log(this);

/*
 * The below code demonstrates that "window" and "this" are same.
 */
if (this === window) {
  console.log("Window and this are equal");
}

var a = 10;
function b() {
  var x = 10;
}

/*
 * This will log the value of a i.e 10 as a is available in the global scope.
 */
console.log(a);

/*
 * This will log the function itself as the function is present in the global scope.
 */
console.log(b);

/*
 * Uncaught ReferenceError: z is not defined.
 * This error occured because x is not available in global scope.
 * If you will do console.log(x) inside the scope of the function b
 * then you it will log successfully.
 */
// console.log(x);

/*
 * Uncaught ReferenceError: y is not defined.
 * This error occured because y is not available.
 */
// console.log(y);
