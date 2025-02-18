// There are eight basic data types in JavaScript

// let message = "hello";
// message = 123456;
// console.log(message);


// Js is dynamically typed : there exist data types, but variables are not bound to any of them.

// The number type represents both integer and floating point numbers.


// special numeric values

// 1. Infinity : a special value that’s greater than any number.

// NaN represents a computational error which is a result of an incorrect or an undefined mathematical operation


// alert( NaN + 1 ); // NaN
// alert( 3 * NaN ); // NaN
// alert( "not a number" / 2 - 1 ); // NaN


// NaN ** 0 is 1(exception)


// treat non-numeric strings as numbers that's why js is (luv) ❤️

// Special numeric values formally belong to the “number” type.




// BigInt : represent integers of arbitrary length.

// In JavaScript, the “number” type cannot safely represent integer values larger than (2^53-1)

// precision error above the safe range


// sometimes we need the entire range of really big integers, e.g. for cryptography or microsecond-precision timestamps.


// A BigInt value is created by appending n to the end of an integer:




// String

// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed another ${str}`;
// console.log(phrase);


// Double quotes: "Hello".
// Single quotes: 'Hello'.

// Backticks: `Hello`. (extended functionality quotes)

// They allow us to embed variables and expressions , arithmetical expression into a string by wrapping them in ${…}




// Boolean (logical type)

// The boolean type has only two values: true and false.


// let isGreater = 4 > 1;
// alert( isGreater ); // true (the comparison result is "yes")




// The “null” value

// It forms a separate type of its own which contains only the null value:

// let age = null;

// special value which represents “nothing”, “empty”





// The “undefined” value
// makes a type of its own

// The meaning of undefined is “value is not assigned”.

// let age;
// alert(age); // shows "undefined"


// If a variable is declared, but not assigned, then its value is undefined:

// it is possible to explicitly assign undefined to a variable:


// let age = 100;
// // change the value to undefined
// age = undefined;
// alert(age); // "undefined


// All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever)





// Objects and Symbols

// objects are used to store collections of data and more complex entities.


// The symbol type is used to create unique identifiers for objects.




// The typeof operator

// The typeof operator returns the type of the operand.


// typeof undefined // "undefined"
// typeof 0 // "number"
// typeof 10n // "bigint"
// typeof true // "boolean"
// typeof "foo" // "string"
// typeof Symbol("id") // "symbol"
// typeof Math // "object"  
// typeof null // "object"  
// typeof alert // "function"  


// Math is a built-in object that provides mathematical operations


// there’s no special “function” type in JavaScript.
// Functions belong to the object type



// Summary




// There are 8 basic data types in JavaScript.

// Seven primitive data types:

// number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).

// bigint for integer numbers of arbitrary length.

// string for strings. A string may have zero or more characters, there’s no separate single-character type.

// boolean for true/false.

// null for unknown values – a standalone type that has a single value null.

// undefined for unassigned values – a standalone type that has a single value undefined.

// symbol for unique identifiers.


// And one non-primitive data type:
// object for more complex data structures.


// The typeof operator allows us to see which type is stored in a variable.



