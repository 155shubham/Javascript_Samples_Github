/*
 * Const is most strict- cant be redeclared and
 * Let is more strict
 * Var is least strict
 */

// //Var Samples
// var a;
// a=10;
// a = "sb";
// var a;

//Let Samples
let a;
a = 10;
a = "sb";
let a; //SyntaxError: Identifier 'a' has already been declared

//const b;

if (a === a) {
  console.log(a);
}
