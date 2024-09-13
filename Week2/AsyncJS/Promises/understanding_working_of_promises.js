/* Understanding working of Promise class */
function random(resolve) {
  // this resolve in also a function
  // after resolve function is called, then callback happens which represents promise is succeeded.
  setTimeout(resolve, 5000);
}
/* This promise needs a function which will tell -> kab complete hoga [random function] */
let p = new Promise(random); // supposed to return you something eventually

/* .then represents when a promise is eventually completed, then what happens */
function callback() {
  console.log("promise is succeeded");
}
p.then(callback);
