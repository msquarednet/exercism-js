var BigInt = require('./big-integer.js');


function Grains() {}

Grains.prototype.square = function(num) {
  return BigInt(2).pow(num-1).toString();
}

Grains.prototype.total = function() {
  var total = BigInt(0);
  var grains;
  for (var i=0; i<64; i++) {
    grains = BigInt(this.square(i+1));
    total = total.add(grains);
  }
  return total.toString();
}


module.exports = Grains;
