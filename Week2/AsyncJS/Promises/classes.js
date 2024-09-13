class Rectangle {
  constructor(length, breadth, color) {
    this.length = length;
    this.breadth = breadth;
    this.color = color;
  }
  paint() {
    console.log("Paint the color to: " + this.color);
  }
  area() {
    console.log("Area is: " + this.length * this.breadth);
  }
}
let rec = new Rectangle(4, 5, "orange");
rec.area();
rec.paint();

//Date class in javascript
let date = new Date();
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.toISOString());

//Maps class in javascript
let map = new Map();
map.set("Rishab", 23);
map.set("Khushi", 24);
console.log(map);
console.log(map.get("Rishab"));
