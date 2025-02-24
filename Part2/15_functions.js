// Functions

// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

// To create a function we can use a function declaration.

// parameter

// function showMessage() {
//   console.log( 'Hello everyone!' );
// }

// Local variables

// A variable declared inside a function is only visible inside that function.

// function showMessage() {
//   let message = "Hello, I'm JavaScript!"; // local variable

//   alert( message );
// }

// showMessage(); // Hello, I'm JavaScript!
// alert( message ); <-- Error! The variable is local to the function

// Outer variables

// function can access an outer variable as well

// The function has full access to the outer variable. It can modify it as well.

// let userName = 'John';

// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable

//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// alert( userName );
// // John before the function call

// showMessage();

// alert( userName );
// // Bob, the value was modified by the function

// let userName = 'John';

// function showMessage() {
//   let userName = "Bob"; // declare a local variable

//   let message = 'Hello, ' + userName; // Bob
//   alert(message);
// }

// // the function will create and use its own userName
// showMessage();

// alert( userName ); // John, unchanged, the function did not access the outer variable

// Global variables

// Variables declared outside of any function, such as the outer userName in the code above, are called global.

// Global variables are visible from any function (unless shadowed by locals).

// Parameters

// We can pass arbitrary(मनमाना) data to functions using parameters.

// function showMessage(from,text){
//   console.log(from + ':' + text);
// }

// showMessage('sax','sux')

// function showMessage(from, text) {
//   // function always gets a copy of the value
//   // value of from parameter here An

//   from = '*' + from + '*';

//   // value of from parameter here *An*

//   console.log( from + ': ' + text );
// }

// let from = "An"

// showMessage(from,"hello")

// console.log(from);

// When a value is passed as a function parameter, it’s also called an argument.

// A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).

// An argument is the value that is passed to the function when it is called (it’s a call time term).

// Default values

// If a function is called, but an argument is not provided, then the corresponding value becomes undefined.

// function showMessage(from, text = "no text given") {
//   console.log( from + ": " + text );
// }

// showMessage("Ann");
// // Ann: no text given

// way1:

// function anotherFn(){
//   return "booby"
// }

// function showMessage(from , text = anotherFn()) {
//   console.log(from + ":" + text);
// }

// showMessage("hello")

// way 2: optimised approach

// function showMessage(from, text) {
//   function anotherFn() {
//     return "booby";
//   }

// if text is undefined or otherwise falsy, set it on basis of funnction call

//   text = text || anotherFn();
//   console.log(from + ":" + text);
// }

// showMessage("hello");

// function showCount(count) {
//   // if count is undefined or null, show "unknown"
//   alert(count ?? "unknown");
// }

// showCount(0); // 0
// showCount(null); // unknown
// showCount(); // unknown

// A function can return a value back into the calling code as the result.

// When the execution reaches it, the function stops, and the value is returned to the calling code

// function sum(a, b) {
//   return a + b;
// }

// let result = sum(1, 2);
// console.log( result ); // 3

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('Do you have permission from your parents?');
//   }
// }

// let age = prompt('How old are you?', 18);

// if ( checkAge(age) ) {
//   alert( 'Access granted' );
// } else {
//   alert( 'Access denied' );
// }

// return without a value. That causes the function to exit immediately.

// Note:  If a function does not return a value, it is the same as if it returns undefined

// function doNothing() { /* empty */ }
// alert( doNothing() === undefined ); // true

// An empty return is also the same as return undefined:

// function doNothing() {
//   return;
// }
// alert( doNothing() === undefined ); // true

// Functions == Comments

// function showPrimes(n) {
//   nextPrime: for (let i = 2; i < n; i++) {

//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }
//     alert( i ); // a prime
//   }
// }

// function showPrimes(n){
//   for (let i = 2; i < n; i++){
//     if (!isPrime(i)) continue;

//     alert(i)
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if ( n % i == 0) return false;
//   }
//   return true;
// }

// Tasks

// Code1

// let age = prompt("what is your age")
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Did parents allow you?');
//   }
// }

// but both if and else block will execute
// checkAge() returns true

// BOTH CODE WILL EXECUTE SAME

// return confirm('Did parents allow you?') executes exactly when the if condition is falsy.

// Code2

// let age = prompt("enter your age")
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Did parents allow you?');
// }
// checkAge()
// true

// Task2

// function checkAge1(age) {
//   return (age > 18) ? true : confirm('Did parents allow you?')
// }

// function checkAge(age){
//   return (age > 18) || confirm('Did parents allow you?');
// }

// /* ::  OR || returns the first truthy value */

// Task 3

// function min(a,b) {
//   return a < b ? a : b
// }

// min(2,3)



// Task 4

// function pow(x, n) {
//   alert("it is method which works x is raised to the power n");

//   x = Number(prompt("enter x"));
//   n = Number(prompt("enter n"));
//   alert(x ** n);
//   return x ** n;
// }

// pow();


// baad mein padhunga


function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}

