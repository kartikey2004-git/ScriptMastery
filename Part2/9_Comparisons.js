// Comparisons

// Greater/less than: a > b, a < b.
// Greater/less than or equals: a >= b, a <= b.

// Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.

// Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.


// All comparison operators return a boolean value

// console.log( 2 > 1 );  // true (correct)
// console.log( 2 == 1 ); // false (wrong)
// console.log( 2 != 1 ); // true (correct)



// let result = 5 > 4; // assign the result of the comparison
// alert( result ); // true


// String comparison
// (dictionary or lexicographical order.)
// The comparison algorithm follows Unicode order


// alert( 'Z' > 'A' ); // true
// alert( 'Glow' > 'Glee' ); // true
// alert( 'Bee' > 'Be' ); // true



// console.log("a" > "A"); // true
// lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode)



// Comparison of different types

// When comparing values of different types, JavaScript converts the values to numbers.


// console.log( '2' > 1 ); // true, string '2' becomes a number 2
// console.log( '01' == 1 ); // true, string '01' becomes a number 1


// alert( true == 1 ); // true
// alert( false == 0 ); // true




// A funny consequence

// let a = 0;
// console.log(Boolean(a)); // false

// let b = "0";
// console.log(Boolean(b)); // true

// console.log(a == b);// true!
// js is not everyone cup of tea

// An equality check converts values using the numeric conversion (hence "0" becomes 0),




// console.log(0 == false); //true
// console.log('' == false); // true


// operands of different types are converted to numbers by the equality operator ==



// A strict equality operator === checks the equality without type conversion.

// strict non-equality: operator !==


// console.log(0 ===  false); // false




// Comparison with null and undefined


// console.log( null === undefined ); // false
// console.log( null == undefined ); // true


// For maths 

// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN


console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true


// Comparisons convert null to a number 0


console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)


// undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.

// because undefined only equals null



// Treat any comparison with undefined/null except the strict equality === with exceptional care.





// Summary


// Comparison operators return a boolean value.
// Strings are compared letter-by-letter in the “dictionary” order.

// When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).

// The values null and undefined equal == each other and do not equal any other value.

// Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.


