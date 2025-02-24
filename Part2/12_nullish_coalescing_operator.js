// The nullish coalescing operator is written as two question marks ??.

// value is “defined” when it’s neither null nor undefined.

// The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.

// It’s used to assign default values to variables

// a ?? b

// if a is defined, then a,
// if a isn’t defined, then b.


// ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.


// result = (a !== null && a !== undefined) ? a : b;


// let user;
// alert(user ?? "Anonymous"); 
// Anonymous (user is undefined)


// let user = "John";
// alert(user ?? "Anonymous"); 
// John (user is not null/undefined)


// Case : display the user name using one of these variables, or show “Anonymous” if all of them are null/undefined.



// let firstName = null;
// let lastName = null;
// let nickName = "Supercoder";

// // shows the first defined value:
// alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder




// Comparison with ||

// let firstName = null;
// let lastName = null;
// let nickName = "Supercoder";

// // shows the first truthy value:
// alert(firstName || lastName || nickName || "Anonymous"); // Supercoder



// || returns the first truthy value.
// ?? returns the first defined value.



// useCase: we may want to use default value only when the variable is null/undefined. That is, when the value is really unknown/not set.



// let height = 0;
// alert(height || 100); // 100
// alert(height ?? 100); // 0


// precedence of the ?? operator is the same as ||




// let height = null;
// let width = null;

// // important: use parentheses
// let area = (height ?? 100) * (width ?? 50);

// alert(area); // 5000

// if not brackets incorrect result due to precedence



// Using ?? with && or ||

// explicit parentheses

// let x = (1 && 2) ?? 3; // Works
// alert(x); // 2