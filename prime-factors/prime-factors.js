function primeFactors() {}

primeFactors.for = function(num) {                                        //console.log('\n', num, '...')
    
  function isPrime(num) {
    return (getFactors(num).length===2 && num>1) ? true : false;
  }
  
  function getFactors(num) {
    var factors = [];
    for (var i = 1; i <= Math.floor(Math.sqrt(num)); i += 1) {
      if (num % i === 0) {
        factors.push(i);
        if (num / i !== i) {factors.push(num / i);}
      }
    }
    factors.sort(function(a, b){return a - b;});  // numeric sort
    return factors;
  }
  
  function getAllPrimeFactors(num) {
    var primefactors = [];
    var remaining = num;  //remaining starts at num, and gets whittled down to 1.
    var factors = getFactors(num);                                        //console.log('factors of '+num+' is ' + factors);
    var factor;
    var i=1;
    do {
      factor = factors[i];
      if (isPrime(factor)) {                                              //console.log( isPrime(factor), factor, i );
        while (remaining % factor === 0) {
          remaining/=factor; primefactors.push(factor);                   //console.log(remaining);
        }
      }
      i++;
    } while (remaining>1);                                                //console.log(primefactors);        
    return primefactors;
  }
        
  return getAllPrimeFactors(num);  
}



module.exports = primeFactors;