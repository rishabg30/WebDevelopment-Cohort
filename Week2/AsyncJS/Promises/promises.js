/*
Here setTimeout is implementing callback function that will be executed after 5000ms.
*/
function logName() {
  console.log("Rishab");
}
setTimeout(logName, 5000); //call back the logName function

/*
A Promise in JavaScript is an object that represents the eventual completion  
(or failure) ofan asynchronous operation and its resulting value
*/

function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function callback() {
  console.log("3 seconds have passed");
}
setTimeoutPromisified(3000).then(callback);
