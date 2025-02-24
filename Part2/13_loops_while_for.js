// The “while” loop

// While the condition is truthy, the code from the loop body is executed.

// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//   alert( i );
//   i++;
// }

// the condition is evaluated and converted to a boolean by while.

// A single execution of the loop body is called an iteration

// by infinite loop we can kill the process. so avoid it




// let i = 3;
// while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
//   alert( i );
//   i--;
// }




// The “do…while” loop


// The condition check can be moved below the loop body using the do..while syntax:


// let i = 0;
// do {
//   console.log( i );
//   i++;
// } while (i < 3);


// loop to execute at least once regardless of the condition being truthy.





// The “for” loop


// for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
//   alert(i);
// }



// begin	let i = 0	Executes once upon entering the loop.

// condition	i < 3	Checked before every loop iteration. If false, the loop stops.

// body	alert(i)	Runs again and again while the condition is truthy.

// step	i++	Executes after the body on each iteration.



// general loop algorithm works
// if condition → run body and run step




// Inline variable declaration

// for (let i = 0; i < 3; i++) {
//   alert(i); // 0, 1, 2
// }
// alert(i); // error, no such variable






// let i = 0;

//  humne as a global variable outside the loop variable declare kra h

// for (i = 0; i < 3; i++){
//   console.log(i);
//   // 0, 1, 2
//   // use an existing variable
// }
// console.log(i);

//  3, visible, because declared outside of the loop






// Skipping parts


// let i = 0; // we have i already declared and assigned
// for (; i < 3; i++) { // no need for "begin"
//   console.log( i ); // 0, 1, 2
// }
// console.log(i);




// this syntax is also possible

// let i = 0;
// for (; i < 3;) {
//   console.log( i++ );
// }




// Breaking the loop


// a loop exits when its condition becomes falsy.
// But we can force the exit at any time using the special break directive.




// let sum = 0;

// while (true) {

//   let value = +prompt("Enter a number", '');
//   // convert krdega input ko number mein

//   if (!value) break;

//   sum += value;

// }
// alert( 'Sum: ' + sum );



// if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop.


// is great for situations when a loop’s condition must be checked not in the beginning or end of the loop,




// Continue to the next iteration

// it stops the current iteration and forces the loop to start a new one (if the condition allows).




// for (let i = 0; i < 10; i++) {

//   // if true, skip the remaining part of the body
//   if (i % 2 == 0) continue;
//   alert(i); // 1, then 3, 5, 7, 9
// }




// Behind the scene baatcheet
// for (let i = 0; i < 10; i++) {

//   if (i % 2) {
//     alert( i );
//   }

// }



// No break/continue to the right side of ?
// (i > 5) ? alert(i) : continue; // continue isn't allowed here



// Labels for break/continue
// we need to break out from multiple nested loops at once.




// for (let i = 0; i < 3; i++){
//   for (let j = 0; j < 3; j++){
//     let input = prompt(`Value at coords (${i},${j})`, '');
//   }
// }
// alert('Done!');

// for each iteration of i , j repeats 3 times


// The ordinary break after input would only break the inner loop. 


// A label is an identifier with a colon before a loop:


// outer: for (let i = 0; i < 3; i++){
//   for (let j = 0; j < 3; j++){
//     let input = prompt(`Value at coords (${i},${j})`, '');


//     // if an empty string or canceled, then break out of both loops
//     if (!input) break outer;

//   }
// }
// alert('Done!');




// Labels do not allow us to jump into an arbitrary place in the code.

// break label; // jump to the label below (doesn't work)

// label: for (...)


// A label is the only way for break/continue to escape a nested loop to go to an outer one.



// for ( let i = 2 ; i<=10 ; i++){
//   if(!(i%2==0)) continue
//   console.log(i)
// }



// let i = 0;
// while(i<3){
//   console.log( `number ${i}!` );
//   i++
// }



// // Repeat until the input is correct use case yaad rkha hai do while loop ka


// let num;
// do {
//   num = prompt("Enter the number greater than 100")
// } while (num && num <= 100);

// condition ye check kregi ki yeh check   &&num hai  ( ye confirm krega by checking its not null nor empty string )


//  prime number ka logic kya hota hai basically aisa number jo ki 1 se divide hoga toh remainder zero dega and khud se divide hoga tab remainder zero dega 

// wrna kuch toh remainder dega



// For each i in the interval {
//   check if i has a divisor from 1..i
//   if yes => the value is not a prime
//   if no => the value is a prime, show it
// }




let n = 4

// pehle wo loop dekho jisse 2 ke baad ke saare number llop hojayein

nextPrime:for(let i = 2; i<=n ; i++){
  // for each i...
  // ab condition loop prime number wala 

  for(let j=2; j<=n;j++){ // look for a divisor (j)..
    if( i % j == 0) continue nextPrime

    // check if i has a divisor from 1..i

    // yaha se humare pass agar ek bhi set of pair mil gya aisa toh continue hojayega toh next outer iteration

    // wo saare number nhi jayenge jo ki 1 or self ke alawa bhi remainder  0 dere h
  } 
  console.log(i)
}