// Hello, world!

// we need a working environment to run our scripts , JavaScript in the browser


// How we attach a script to a webpage.

// The <script> tag contains JavaScript code which is automatically executed when the browser processes the tag. 

//  The old HTML standard, HTML4, required a script to have a type , language attribute

// <!-- type attribute can be used for JavaScript modules in nowadays


{/* <script type="text/javascript"><!--
  ...
//--></script> */}


// this type of comments is used to hide JavaScript code from browsers




// External scripts

// Script files are attached to HTML with the src attribute:

// console.log("hi");
//  window.alert("hi")


// absolute path , relative path , full URL 

// The benefit of a separate file is that the browser will download it and store it in its cache.


// Other pages that reference the same script will take it from the cache instead of downloading it, so the file is actually downloaded only once


// That reduces traffic and makes pages faster.


// If src is set, the script content is ignored.




// Summary

// We can use a <script> tag to add JavaScript code to a page.

// The type and language attributes are not required.

// A script in an external file

