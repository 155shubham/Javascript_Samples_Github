console.log("Demo for javascript closure");

/*
 * Demo for simple closure
 */
// function x() {
//   var a = 16;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

/*
 * Demo for closure (When returning the closure ==> function + lexical environment).
 * When this code is executed then we will observe that even though the
 * funtion y has been returned to z and z is outside  the function x,
 * it will print 16 because of the function y when returned
 * is still have references to it surrounding state and this is known as closure.
 * If you will give breakpoint inside function y, you can see the "Closure (x)"
 * alongwith the variable in the call stack because it (function y) contains
 * the references of x.
 */
// function x() {
//   var a = 16;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// var z = x();
// z();

/*
 * Same as above. Only syntax difference. The simpler version is above and
 * below once looks complicated to new developers.
 */
// function x() {
//   var a = 16;
//   return function y() {
//     console.log(a);
//   };
// }
// var z = x();
// z();

/*
 * It will print 20 in the console as the closure is returned
 * after the variable a is reassigned. So the lexial environment
 * will contain the updated value of the variable a.
 */
// function x() {
//   var a = 16;
//   function y() {
//     console.log(a);
//   }
//   a = 20;
//   return y;
// }
// var z = x();
// z();

/*
 * It will print 16 in the console as the closure is returned
 * before the variable a as is reassigned. So the lexial environment
 * will contain the previous value of the variable a.
 */
// function x() {
//   var a = 16;
//   function y() {
//     console.log(a);
//   }
//   return y;
//   a = 20;
// }
// var z = x();
// z();

/*
 * Here's a slightly more interesting example— an adder function:
 * In this example, we have defined a function makeAdder(x), that
 * takes a single argument x, and returns a new function. The function
 * it returns takes a single argument y, and returns the sum of x and y.
 * In essence, makeAdder is a function factory. It creates functions
 * that can add a specific value to their argument. In the above example,
 * the function factory creates two new functions—one that adds five to
 * its argument, and one that adds 10. add5 and add10 are both closures.
 * They share the same function body definition, but store different
 * lexical environments. In add5's lexical environment, x is 5, while
 * in the lexical environment for add10, x is 10.
 */
// function x(a) {
//   return function y(b) {
//     return a + b;
//   };
// }
// var add5 = x(5);
// var add10 = x(10);

// console.log(add5(2));
// console.log(add10(2));
