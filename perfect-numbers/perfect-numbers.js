function PerfectNumbers() {}

PerfectNumbers.prototype.classify = function(num) {
  var result = 'Classification is only possible for natural numbers.'
  if (num>0) {
    var factors = PerfectNumbers.getFactors(num)
    var aliqoute= PerfectNumbers.getAliquote(factors)
    if (aliqoute > num)       {result = 'abundant'} 
    else if (aliqoute < num)  {result = 'deficient'} 
    else                      {result = 'perfect'}
  }
  return result
}

PerfectNumbers.getFactors = function (num) {
  var factors = [];
  for (var i = 1; i <= Math.floor(Math.sqrt(num)); i += 1) {
    if (num % i === 0) {
      factors.push(i);
      // factors.push(num / i)
      if (num / i !== i) {factors.push(num / i);} //[1,1]
    }
  }
  factors.sort(function(a, b){return a - b;});  // numeric sort
  return factors;
}

PerfectNumbers.getAliquote = function (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length-1; i ++) {sum += arr[i]}
  return sum;
}



module.exports = PerfectNumbers
