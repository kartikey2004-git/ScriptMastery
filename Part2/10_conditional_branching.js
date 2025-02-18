// Conditional branching: if, '?'

// The “if” statement

// The if(...) statement evaluates a condition in parentheses and converts the result to a boolean, if the result is true, executes a block of code.

// A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.

// Other values become true, so they are called “truthy”.

// Boolean conversion


// let year = prompt('In which year was ECMAScript-2015 specification published?', '');

// if (year == 2015) {
//   alert( "That's correct!" );
//   alert( "You're so smart!" );
// }


// The “else” clause

// The if statement may contain an optional else block. It executes when the condition is falsy.



// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

// if (year == 2015) {
//   alert( 'You guessed it right!' );
// } else {
//   alert( 'How can you be so wrong?' ); // any value except 2015
// }



// Several conditions: “else if”


// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

// if (year < 2015) {
//   alert( 'Too early...' );
// } else if (year > 2015) {
//   alert( 'Too late' );
// } else {
//   alert( 'Exactly!' );
// }





// Conditional operator ‘?’(ternary operator)
// because the operator has three operands

// we need to assign a variable depending on a condition.



// let accessAllowed;
// let age = prompt('How old are you?', '');

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);



// let result = condition ? value1 : value2;

// The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.





// Multiple ‘?’


// A sequence of question mark operators ? can return a value that depends on more than one condition.



// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );




// above code execution in if-else-else if

// if (age < 3) {
//   message = 'Hi, baby!';
// } else if (age < 18) {
//   message = 'Hello!';
// } else if (age < 100) {
//   message = 'Greetings!';
// } else {
//   message = 'What an unusual age!';
// }

// alert( message );




// ? is used as a replacement for if



// let company = prompt('Which company created JavaScript?', '');

// (company == 'Netscape') ?
// alert('Right!') : alert('Wrong.');





// alternative if-else-else if

// let company = prompt('Which company created JavaScript?', '');

// if (company == 'Netscape') {
//   alert('Right!');
// } else {
//   alert('Wrong.');
// }

// ---------------------------------------------

// Question Practice

// a = 3
// b = 0

// let result;
// ( a+b < 4) ? result = "Below" : result = "Over"
// console.log(result);

// let result = (a + b < 4) ? 'Below' : 'Over';
// console.log(result);




// let message = (login == 'Employee') ? "Hello" : (login == 'Director') ? "Greetings" : 
// (login == '') ? "No login" :
//  ""



