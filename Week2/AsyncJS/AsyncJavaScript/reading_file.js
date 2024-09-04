// fs is an external library of Node which stands for file system

/*
reading file synchronously
*/
const fs = require("fs");
const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);

/*
reading file asynchronously
*/