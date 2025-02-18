// JavaScript was initially created to “make web pages alive”.

// The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.

// Scripts don’t need compilation to run.

//  ECMAScript

// JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine.


// The browser has an embedded engine sometimes called a “JavaScript virtual machine”.

// Different engines 

// V8 – in Chrome, Opera and Edge.
// SpiderMonkey – in Firefox.


// How do engines work?

// The engine (embedded if it’s a browser) reads (“parses”) the script.

// Then it converts (“compiles”) the script to machine code.

// And then the machine code runs, pretty fast.



// What can in-browser JavaScript do?



// It does not provide low-level access to memory or the CPU, because it was initially created for browsers which do not require it.

// JavaScript’s capabilities greatly depend on the environment it’s running in.

// Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.


// In-browser JavaScript can do everything related to webpage manipulation, interaction with the user, and the webserver.


// In-browser JavaScript is able to:


// Add new HTML to the page, change the existing content, modify styles.

// React to user actions, run on mouse clicks, pointer movements, key presses.

// Send requests over the network to remote servers, download and upload files (so-called AJAX and COMET technologies).

// Get and set cookies, ask questions to the visitor, show messages.

// Remember the data on the client-side (“local storage”).



// What CAN’T in-browser JavaScript do?


// JavaScript’s abilities in the browser are limited to protect the user’s safety.

// The aim is to prevent an evil webpage from accessing private information or harming the user’s data.


// JavaScript on a webpage may not read/write arbitrary files on the hard disk, copy them or execute programs. It has no direct access to OS functions.


// Modern browsers allow it to work with files, but the access is limited and only provided if the user does certain actions, like “dropping” a file into a browser window or selecting it via an <input> tag.


// There are ways to interact with the camera/microphone and other devices, but they require a user’s explicit permission. So a JavaScript-enabled page may not sneakily enable a web-camera, observe the surroundings and send the information to the NSA.



// Different tabs/windows generally do not know about each other. Sometimes they do, for example when one window uses JavaScript to open the other one. 

// But even in this case, JavaScript from one page may not access the other page if they come from different sites (from a different domain, protocol or port).


// This is called the “Same Origin Policy”. 


// JavaScript can easily communicate over the net to the server where the current page came from. But its ability to receive data from other sites/domains is crippled.


// Though possible, it requires explicit agreement (expressed in HTTP headers) from the remote side



// Such limitations do not exist if JavaScript is used outside of the browser, for example on a server. 
 
// Modern browsers also allow plugins/extensions which may ask for extended permissions.


// JavaScript can be used to create servers



