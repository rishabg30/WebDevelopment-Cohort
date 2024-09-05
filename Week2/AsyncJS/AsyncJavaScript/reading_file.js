// fs is an external library of Node which stands for file system

/*
reading file synchronously

const fs = require("fs");
const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);
*.

/*
reading file asynchronously
*/

const fs = require("fs");

function afterFileRead(err, data) {
  console.log(data);
}
const content1 = fs.readFile("a.txt", "utf-8", afterFileRead);
const content2 = fs.readFile("b.txt", "utf-8", afterFileRead);
