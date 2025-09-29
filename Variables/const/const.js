//The const keyword is used to declare a variable. It has a block-scoped or function-scoped behaviour.

function myFunction() {
  const globalVariable = "We are Man United";
  console.log(globalVariable);
  globalVariable = "We do whatever we want!"; //  Cannot be redeclared and Can't be reassigned
  console.log(globalVariable);
}

myFunction();
