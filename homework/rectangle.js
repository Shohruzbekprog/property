function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}
Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};
Rectangle.prototype.getPerimeter = function() {
  return 2 * (this.width + this.height);
};
let rectangle = new Rectangle(5, 7);

console.log(rectangle.width);

console.log(rectangle.height);

console.log(rectangle.getArea());

console.log(rectangle.getPerimeter());
