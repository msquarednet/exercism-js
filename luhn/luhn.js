function Luhn(str) {
  this.valid = Luhn.validate(str)
}

Luhn.validate = function(str) {
  var input = str.replace(/\s/gi, '').split('').reverse()
  if (input.length>1) {
    return input
      .map((x,i) => (i%2===0) ? x : (x*2>9) ? x*2-9 : x*2)
      .reduce((sum,x) => sum + Number(x),0)%10===0
  }
  return false
}



module.exports = Luhn;