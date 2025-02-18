// Basic operators, maths
// addition +, multiplication *, subtraction - etc


// Terms: “unary”, “binary”, “operand”
// 5 * 2 there are two operands

// An operator is unary if it has a single operand


// let x = 1;
// x = -x;
// alert( x ); // -1, unary negation was applied


// An operator is binary if it has two operands. The same minus exists in binary form as well:

// let x = 1, y = 3;
// alert( y - x ); // 2, binary minus subtracts values


// Maths

// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,

// Remainder % (The result of a % b is the remainder of the integer division of a by b)

// alert( 5 % 2 ); // remainder = 1
// alert( 8 % 3 ); // remainder = 2
// alert( 8 % 4 ); // remainder = 0



// Exponentiation **

// The exponentiation operator a ** b raises a to the power of b.


// alert( 2 ** 2 ); // 2² = 4
// alert( 2 ** 3 ); // 2³ = 8
// alert( 2 ** 4 ); // 2⁴ = 16



// alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
// alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)



// String concatenation with binary +
// binary + is applied to strings, it merges (concatenates) them:


// let s = "my" + "string";
// alert(s); // mystring


// alert( '1' + 2 ); // "12"
// alert( 2 + '1' ); // "21"


// alert(2 + 2 + '1' ); // "41" and not "221"

// alert('1' + 2 + 2); // "122" and not "14"

// first operand is a string, the compiler treats the other two operands as strings too.



// alert( 6 - '2' ); // 4, converts '2' to a number
// alert( '6' / '2' ); // 3, converts both operands to numbers



// Numeric conversion, unary +
//  the unary plus converts number string into a number.

// No effect on numbers

// let x = 1;
// alert( +x ); // 1

// let y = -2;
// alert( +y ); // -2



// Converts non-numbers
// alert( +true ); // 1
// alert( +"" );   // 0


// need to convert strings to numbers arises
// we are getting values from HTML form fields, they are usually strings. 


// let apples = "2";
// let oranges = "3";

// alert( apples + oranges ); // "23", the binary plus concatenates strings



// let apples = "2";
// let oranges = "3";

// both values converted to numbers before the binary plus
// alert( +apples + +oranges ); // 5



// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5



// Operator precedence

// Every operator has a corresponding precedence number.(BODMAS)
 
// The one with the larger number executes first. If the precedence is the same, the execution order is from left to right.


// unary +,- precedence sabse jyada hoti h




// Assignment
// precedence table with the very low priority of 2.

// let x = 2 * 2 + 1;
// alert( x ); // 5


// All operators in JavaScript return a value. 
// = returns the value stored in variable



// let a = 1;
// let b = 2;
// let c = 3 - (a = b + 1);
// alert( a ); // 3
// alert( c ); // 0



// Chaining assignments


// let a, b, c;
// a = b = c = 2 + 2;

// alert( a ); // 4
// alert( b ); // 4
// alert( c ); // 4




// Modify-in-place

// let n = 2;
// n += 5; // now n = 7 (same as n = n + 5)
// n *= 2; // now n = 14 (same as n = n * 2)

// alert( n ); // 14




// let n = 2;
// n *= 3 + 5; // right part evaluated first, same as n *= 8
// alert( n ); // 16



// Increment/decrement
// Increment ++ increases a variable by 1:
// Decrement -- decreases a variable by 1:
// Increment/decrement can only be applied to variables

// let counter = 2;
// counter++;        // works the same as counter = counter + 1, but is shorter
// alert( counter ); // 3



// let counter = 2;
// counter--;        // works the same as counter = counter - 1, but is shorter
// alert( counter ); // 1



// postfix form : counter++.
// The “prefix form : ++counter.


// let counter = 1;
// let a = ++counter; // (*)
// alert(a); // 2 return value mein ye hota hai pehle wo increment krleta hai and baad mein return krta 


// let counter = 1;
// let a = counter++; // (*) changed ++counter to counter++
// alert(a); // 1  return value mein same value return hojati hai and then increment hota hai



// let counter = 0;
// counter++;
// ++counter;
// alert( counter ); // 2, the lines above did the same


// let counter = 1;
// alert( 2 * ++counter ); // 4


// let counter = 1;
// alert( 2 * counter++ ); // 2, because counter++ returns the "old" value






// Bitwise operators

// Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.


// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )


// You can read the Bitwise Operators chapter on MDN when a need arises.



// Comma(little bit tricky)(kuch samjh nhi aaya)

// let a = (1 + 2, 3 + 4);
// alert( a ); // 7 (the result of 3 + 4)


// a = 1 + 2, 3 + 4
// alert(a) //  3


// comma operator has very low precedence, lower than =




// Tricky js

// "" + 1 + 0 = "10" // (1)
// "" - 1 + 0 = -1 // (2)
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5" // (3)
// "  -9  " - 5 = -14 // (4)
// null + 1 = 1 // (5)
// undefined + 1 = NaN // (6)
// " \t \n" - 2 = -2 // (7)




// -----------------------------------------------


// Question Solving part

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);
// alert(+a + +b); // 3


// or 


// let a = +prompt("First number?", 1);
// let b = +prompt("Second number?", 2);
// alert(a + b); // 3


// or 

// // let a = prompt("First number?", 1);
// // let b = prompt("Second number?", 2);
// alert(Number(a)+Number(b))  // 3


