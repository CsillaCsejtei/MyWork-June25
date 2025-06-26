console.log("Hello from script.js");

// What is this?
//It logs the window object. It is showing all properties/methods.
// document (DOM), URL, console, setTimeout...etc
console.log(window);

// What is the difference between window and document?
//Document object is the property of the window.
console.log(document);

// What is the difference between document and document.documentElement?
// document is the entire DOM object.
// documentElement is the root HTML element (<html> tag).
console.log(window.document);
console.log(document.documentElement);

// what are the children of the body element?
// What is inside the body element: The <div class="container"> and
// The <script> tag
console.log(document.body.children);
