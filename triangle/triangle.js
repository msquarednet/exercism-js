function Triangle(side1,side2,side3) {
  this.side1 = side1 || 0;
  this.side2 = side2 || 0;
  this.side3 = side3 || 0;
  this.sides = [this.side1, this.side2, this.side3].sort(function(a,b){return a-b});
  console.log('this sides...', this.sides)
}

Triangle.prototype.kind = function() {
  if (this.sides[2] > this.sides[0] + this.sides[1]) {throw new Error('invalid triangle')}
  if (this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0) {throw new Error('not positive side')}
  else if (this.side1===this.side2 && this.side1===this.side3) {return 'equilateral'}
  else if (this.side1===this.side2 || this.side2===this.side3 || this.side2===this.side3 || this.side1===this.side3) {return 'isosceles'}
  else if (this.side1!==this.side2 && this.side1!==this.side3) {return 'scalene'}
}


module.exports = Triangle;