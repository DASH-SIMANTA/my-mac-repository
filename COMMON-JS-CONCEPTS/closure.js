
function kitchen(){
    let roast = 0;

    return function(){
        roast++;
        return roast;
    }
}
const firstServer = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

const kitchen1 =kitchen();
const kitchen2 = kitchen();
console.log(kitchen1());
console.log(kitchen2());
console.log(kitchen1());
console.log(kitchen2());
console.log(kitchen1());

/*
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time. 
*/

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();

/*
Example Explained
The variable add is assigned to the return value of a function.

The function only runs once. It sets the counter to zero (0), and returns a function expression.

This way add becomes a function. The "wonderful" part is that it can access the counter in its parent scope.

This is called a closure. It makes it possible for a function to have "private" variables.

The counter is protected by the scope of the myCounter function, and can only be changed using the add function.
*/

function myCounter() {
    let counter = 0;
    return function() {
      counter++;
      return counter;
    };
  }
  const add = myCounter();
  add();
  add();
  add();



/*
 A closure is a function that has access to the parent scope, after the parent function has closed.

 Closures has historically been used to:

 Create private variables
 Preserve state between function calls
 Simulate block-scoping before let and const existed
 Implement certain design patterns like currying and memoization
  
  
*/