function Trinary(str) {
  this.str = str || 0;
};

Trinary.prototype.toDecimal = function() {
  var result = 0;
  var exp = 0;
  var digit = 0;
  var arr = this.str.split('');             //console.log('\narr', arr)
  for (var i=arr.length-1; i>=0; i--) {
    digit = arr[i]*Math.pow(3,exp);
    result += digit;
    exp += 1;
    if (isNaN(result)) {result=0; break;}   //console.log(i, arr[i], digit, result)
  }
  return result;
}


module.exports  = Trinary;