/*
setTimeout asyncronous function
console.log("Hi, starting up the program");

function runAfter() {
  console.log("Hope you doing well!");
}
setTimeout(runAfter, 10000);
console.log("Hey, Good afternoon!");
*/

/* One major thing to understand here is:
 */

console.log("Hey, starting execution of program");

function runAfter() {
  console.log("Called a callback() function");
}
setTimeout(runAfter, 1000);

/*
Let's say I am performing a CPU intensive task, and it takes 3-4 secs. 
What should be the output for this ?

Option1 : 
Hey, starting execution of program
Called a callback() function
Print c

Option2 :
Hey, starting execution of program
Print c
Called a callback() function

We might think Option1 is the right ans but that is wrong here. The correct output is Option2
Reason: Since, we know callback function will get executed after 1 sec, but our CPU is busy with expensive task
going on and we do not have a thread empty, therefore first CPU expensive task will be over and printed and then 
we go and print callback() function. Till then the data will be stored in callback queue.
*/

let c = 0;
for (let i = 0; i < 100000000; i++) {
  c += 1;
}
console.log("Print c");
