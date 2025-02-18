// Variables

// a JavaScript application needs to work with information.

// Variables are used to store this information or ( “named storage” for data)


// Works in browser not in node

// let message; 
// message = 'Hello'; 
// alert(message);


// sabse pehle memory mein undefined jayega

// store the string 'Hello' in the variable named message

// The string is now saved into the memory area associated with the variable


//  declare multiple variables in one line:

// let user = 'John', age = 25, message = 'Hello';

// let user = 'John';
// let age = 25;
// let message = 'Hello';



// var instead of let(baad mein padhenge)


// let message;
// message = 'Hello!';
// message = 'World!'; // value changed
// alert(message);


// When the value is changed, the old data is removed from the variable:



// We can also declare two variables and copy data from one into the other.

// let hello = 'Hello world!';
// let message;
// // copy 'Hello world' from hello into message
// message = hello;

// // now two variables hold the same data
// alert(hello); // Hello world!
// alert(message); // Hello world!




// A variable should be declared only once.

//  Haskell programming language, that forbid changing variable values.(the language forces us to create a new box (declare a new variable))




// Variable naming conventions or rules

// The name must contain only letters, digits, or the symbols $ and _.
// The first character must not be a digit.
// '$' and the underscore '_' can also be used in names. 
// Case matters

// There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.



// this type of syntax without use strict is possible but not preferrable

// num = 5; // the variable "num" is created if it didn't exist
// alert(num); // 5



// Constants

// To declare a constant (unchanging) variable, use const

// const myBirthday = '18.04.1982';
// Assignment to constant variable is not possible


// const pageLoadTime = /* time taken by a webpage to load */;


// Modern JavaScript minifiers and browsers optimize code well enough, so it won’t create performance issues.

// Using different variables for different values can even help the engine optimize your code.


// Summary


// let – is a modern variable declaration.

// var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.

// const – is like let, but the value of the variable can’t be changed.

