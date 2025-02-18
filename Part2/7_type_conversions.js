// Type Conversions

// operators and functions automatically convert the values given to them to the right type.


// For example, alert automatically converts any value to a string to show it. Mathematical operations convert values to numbers.


// String Conversion(obvious for primitive values)
// String(value) function to convert a value to a string


// let value = true;
// alert(typeof value); // boolean
// value = String(value); // now value is a string "true"
// alert(typeof value); // string



// Numeric Conversion

// alert( "6" / "2" ); // 3, strings are converted to numbers

// Explicit conversion

// let str = "123";
// alert(typeof str); // string
// let num = Number(str); // becomes a number 123
// alert(typeof num); // number


// If the string is not a valid number, the result of such a conversion is NaN


// let age = Number("an arbitrary string instead of a number");
// alert(age); // NaN, conversion failed





// Numeric conversion rules:


// undefined :	NaN
// null : 0
// true and false :	1 and 0

// string	: Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. 

// If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN



// alert( Number("   123   ") ); // 123
// alert( Number("123z") );      // NaN (error reading a number at "z")
// alert( Number(true) );        // 1
// alert( Number(false) );       // 0







// Boolean Conversion : explicitly with a call to Boolean(value)

// The conversion rule:

// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.

// Other values become true.


// alert( Boolean(1) ); // true
// alert( Boolean(0) ); // false

// alert( Boolean("hello") ); // true
// alert( Boolean("") ); // false

// alert( Boolean("0") ); // true
// alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)


