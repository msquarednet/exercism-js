function Sieve(lim){
  console.time('timer')
  
  this.lim = lim;
  this.primes = this.getPrimes();               //~18ms   11ms for 100,000
  // this.primes = this.getSplicedPrimes();    //~20ms     4000ms for 100,000! (forget about 1M)
  
  console.timeEnd('timer')
}

Sieve.prototype.getSplicedPrimes = function() {
  var array = []
  var n = this.lim;
  
  for (var i = 0; i <= n; i++) {array.push(i)}

  for (var i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      for (var j=array.length-1; j>i; j--) {  //remove multiples (decrement by 1, since length is changing)
          if (array[j]%i==0) {
            array.splice(j,1)
          }
      }
  }
  return array.slice(2);  
}

Sieve.prototype.getPrimes = function() {
  var array = []
  var output = [];
  var n = this.lim;
  
  for (var i = 0; i <= n; i++) {array.push(true)}
  
  for (var i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      if (array[i]) {
          for (var j = i * i; j <= n; j += i) { //remove multiples (increment by multiples)
              array[j] = false;
          }
      }
  }
  for (var i = 2; i <= n; i++) {if (array[i]) {output.push(i)}}
  return output;
}


module.exports = Sieve;

// console.log('TEST')
// new Sieve(100000).primes
// console.log('TEST')