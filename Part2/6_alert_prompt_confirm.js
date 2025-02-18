// Interaction: alert, prompt, confirm

// functions to interact with the user: alert, prompt and confirm.


// alert

// The mini-window with the message is called a modal() window. It means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window

// – until they press “OK”.



// prompt 

// The function prompt accepts two arguments
// result = prompt(title, [default]); like this

// title: The text to show the visitor.
// default: the initial value for the input field.(optional)

// It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.


// The call to prompt returns the text from the input field or null if the input was canceled.


// let age = prompt('How old are you?', 100);
// alert(`You are ${age} years old!`); // You are 100 years old!


// but Internet Explorer will insert the text "undefined" if optional parameter is not defined





// confirm

// The function confirm shows a modal window with a question and two buttons: OK and Cancel.

// The result is true if OK is pressed and false otherwise.

// let isBoss = confirm("Are you the boss?");
// alert( isBoss ); // true if OK is pressed



// All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.


// The exact location of the modal window is determined by the browser





