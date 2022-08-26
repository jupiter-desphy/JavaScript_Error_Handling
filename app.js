// TODO: Enable strict mode
"use strict";
// TODO: Fix the following parameter list
function parseToJSON(data) {
  // TODO: Add a try/catch block to
  // attempt to convert 'data' to JSON
  try {
    return JSON.parse(data);
    // TODO: if an exception is raised
  } catch (error) {
    // print the error to the console
    console.error(error.message);
    // and return null
    return null;
  }
}

let failData = "<h1>Hello World!</h1>";

let passData = JSON.stringify({ success: true });

console.log(parseToJSON(failData));

console.log(parseToJSON(passData));
``