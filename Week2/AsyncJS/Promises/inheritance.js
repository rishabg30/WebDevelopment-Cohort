class Shape {
  constructor(color) {
    this.color = color;
  }
  paint() {
    console.log("set the color to: " + this.color);
  }
}

class Rectangle extends Shape {
  constructor(length, breadth, color) {
    super(color);
    this.length = length;
    this.breadth = breadth;
    // Calls parent call to inherit it's properties
  }
  areaRectangle() {
    console.log("area of rectangle: " + this.length * this.breadth);
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }
  areaCircle() {
    console.log("area of circle: " + this.radius * this.radius * Math.PI);
  }
}

let myCircle = new Circle(7, "orange");
myCircle.areaCircle();
myCircle.paint();
