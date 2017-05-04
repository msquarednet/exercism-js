function Octal(str) {
  this.octal = str;
}

Octal.prototype.toDecimal = function() {
  if (/\D|8/.test(this.octal)) {return 0}
  return this.octal.split('').reverse().reduce((sum, x, i) => sum + x*Math.pow(8,i), 0)
}



module.exports = Octal;