// Logical operators

// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).


// || (OR)

// If any of its arguments are true, it returns true, otherwise it returns false.


// alert( true || true );   // true
// alert( false || true );  // true
// alert( true || false );  // true
// alert( false || false ); // false



// If an operand is not a boolean, it’s converted to a boolean for the evaluation.



// if (1 || 0) { // works just like if( true || false )
//   alert( 'truthy!' );
// }



// let hour = 9;
// if (hour < 10 || hour > 18) {
//   alert( 'The office is closed.' );
// }




// let hour = 12;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
//   alert( 'The office is closed.' ); // it is the weekend
// }



// OR "||" finds the first truthy value
// Evaluates operands from left to right.

// returns the original value of that operand.

// If all operands have been evaluated (i.e. all were false), returns the last operand.




// alert( 1 || 0 ); // 1 (1 is truthy)
// alert( null || 1 ); // 1 (1 is the first truthy value)
// alert( null || 0 || 1 ); // 1 (the first truthy value)
// alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)




// Getting the first truthy value from a list of variables or expressions.

// let firstName = ""; // empty string as a falsy value
// let lastName = "";
// let nickName = "SuperCoder";


// console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder




// Short-circuit evaluation.
// OR || processes its arguments until the first truthy value is reached


// true || alert("not printed");
// false || alert("printed");




// && (AND)

// AND returns true if both operands are truthy and false otherwise:


// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false



// let hour = 12;
// let minute = 30;

// if (hour == 12 && minute == 30) {
//   alert( 'The time is 12:30' );
// }




// if (1 && 0) { 
//   // evaluated as true && false
//   alert( "won't work, because the result is falsy" );
// }



// AND “&&” finds the first falsy value
// Evaluates operands from left to right.

// returns the original value of that operand.

// If all operands have been evaluated (i.e. all were truthy), returns the last operand.



// AND returns the first falsy value or the last value if none were found.


// alert( 1 && 0 ); // 0
// alert( 1 && 5 ); // 5


// alert( null && 5 ); // null
// alert( 0 && "no matter what" ); // 0

// alert( 1 && 2 && null && 3 ); // null
// alert( 1 && 2 && 3 ); // 3, the last one




// Precedence of AND && is higher than OR ||

// a && b || c && d  is same as  (a && b) || (c && d)



// possible but not a good practice

// let x = 1;
// (x > 0) && alert( 'Greater than zero!' );





// ! (NOT)

// The boolean NOT operator is represented with an exclamation sign !.


// The operator accepts a single argument 

// Converts the operand to boolean type: true/false.
// Returns the inverse value.



// alert( !true ); // false
// alert( !0 ); // true



// A double NOT !! is sometimes used for converting a value to boolean type:

// let a = !!"non-empty string"
// console.log(typeof(a)) // boolean


// alert( !!"non-empty string" ); // true
// alert( !!null ); // false 

// yaha pe ek string ko boolean mein convert kra hai toh true hogya hai and ek null ko boolean mein convert kra hai toh false hogya h



// alert( Boolean("non-empty string") ); // true
// alert( Boolean(null) ); // false



// alert( alert(1) && alert(2) );

// && evaluates the left operand (outputs 1), and immediately stops, because undefined is a falsy value.

// && looks for a falsy value and returns it







// let userName = prompt("Enter your name")

// if(userName == "Admin"){
//   let password = prompt("Give me the password")

//   if(password == "TheMaster"){
//     alert("Welcome")
//   }
//   else if(password == "" || password == null){
//     alert("Cancelled")
//   }
//   else{
//     alert("Wrong password")
//   }
// }

// if(userName == "" || userName == null){
//   alert("Canceled")
// }

// else{
//   alert("I don’t know you")
// }


