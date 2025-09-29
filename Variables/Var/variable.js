//The var keyword is used to declare a variable. It has a function-scoped or globally-scoped behaviour.

var globalVariable = "We are Man United";

function myFunction() {
  console.log(globalVariable); // Can access globalVariable
}
myFunction(); // Output: I am global

var globalVariable = "We do whatever we want!"; // redeclared
console.log(globalVariable); // Output: I am global
