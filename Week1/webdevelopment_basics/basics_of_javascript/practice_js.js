// Variables used in javascript
// Nowadays let and const are used to define datatypes
let firstname = "Rishab";
console.log(firstname);
var firstname2 = "Khushi";
console.log(firstname2);
const firstname3 = "Varun";
console.log(firstname3);

// arrays/list in javascript
let names = ["Randy Ortan", "John Cena", "Kane"];
console.log(names);
console.log("First element of names: " + names[0]);

// functions in javascript
function greet(name) {
  return "hello, " + name;
}
let message = greet("Rishab");
console.log(message);

// Looping in javascript
let fruits = ["Mango", "Banana", "Apple", "Grapes"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Complex dataTypes in javascript
// arrays in js = arrays/vectors in C++
// objects in js = map in C++
let user1 = {
  name: "Rishab",
  age: 23,
  gender: "Male",
};
console.log(user1.age);

// arrays of objects in javascript
let arr1 = [
  { name: "R", surname: "G", age: 23 },
  { name: "K", surname: "G", age: 24 },
];
console.log(arr1);
/*[
    { name: 'R', surname: 'G', age: 23 },
    { name: 'K', surname: 'G', age: 24 }
  ]
*/
console.log(arr1[0]);
// { name: 'R', surname: 'G', age: 23 }
console.log(arr1[0].surname);
// G

// objects of objects in javascript
let curr_user = {
  firstname: "Rishab",
  lastname: "Gupta",
  age: 24,
  address: {
    city: "Meerut",
    state: "Uttar Pradesh",
    country: "India",
  },
};
console.log(curr_user.address.country);
