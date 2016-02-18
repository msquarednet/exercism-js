var Binary = function(str) {
  this.bstr = validate(str);
  
  function validate(str) {
    return (isNaN(str) || /[2-9]/.test(str)) ? 0 : str;
  }  
}


Binary.prototype.toDecimal = function() {
  return parseInt(this.bstr, 2);
}



module.exports = Binary;