// The "switch" statement

// A switch statement can replace multiple if checks.

//  case blocks and an optional default.
//  strict equality

// If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).

// If there is no break then the execution continues with the next case without any checks.



// let a = 2 + 2;

// switch (a) {
//   case 3:
//     console.log('too small');
//     break;
//   case 4:
//     console.log('exactly');
//     break;
//   case 5:
//     console.log('too big');
//     break;
//   default:
//     console.log('i do not know such values');
//     break;
// }



// let a = "1";
// let b = 0;

// switch (+a) {
//   case b + 1:
//     console.log("this runs, because +a is 1, exactly equals b+1");
//     break;

//   default:
//     console.log("this doesn't run");
// }



// Grouping of “case” or multiple if statement kind of


// let a = 3;

// switch (a) {
//   case 4:
//     console.log('right');
//     break;

//   case 3: // (*) grouped two cases
//   case 5:
//     console.log('Wrong!');
//     console.log("Why don't you take a math class?");
//     break;

//   default:
//     console.log('The result is strange. Really.');
//     break;
// }




// Type matters
// equality check is always strict.




// let arg = prompt("Enter a value?");
// alert(typeof(arg));
// switch (arg) {
//   case '0':
//   case '1':
//     alert( 'One or zero' );
//     break;

//   case '2':
//     alert( 'Two' );
//     break;

//   case 3:
//     alert( 'Never executes!' );
//     break;
//   default:
//     alert( 'An unknown value' );
// }





// if(browser === "Edge"){
//   alert( "You've got the Edge!" );
// }

// else if(browser === "Chrome" 
//   || browser === "Firefox" 
//   || browser === "Safari" 
//   || browser === "Opera" ){
//   console.log('Okay we support these browsers too');
// }

// else{
//   console.log('We hope that this page looks ok!');
// }



// let a = +prompt('a?', '');

// switch (a) {
//   case 0:
//     console.log(0);
//     break;
//   case 1:
//     console.log(1);
//     break;
//   case 2:
//   case 3:
//     console.log("2 or 3");
//     break;
// }