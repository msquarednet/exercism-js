function Crypto(input) {
  this.input = input || '';
}

Crypto.prototype.normalizePlaintext = function() {
  return this.input.replace(/\W/gi, '').toLowerCase();
}
Crypto.prototype.size = function() {
  return Math.ceil(Math.sqrt(this.normalizePlaintext().length));
}
Crypto.prototype.plaintextSegments = function() {
  var arr = [];
  var txt = this.normalizePlaintext();
  var size= this.size();
  for (var i=0,l=txt.length; i<l; i+=size) {    
    arr.push(txt.slice(i, i+size))
  }
  return arr;
}
Crypto.prototype.ciphertext = function() {
  var str = '';
  var arr = this.plaintextSegments();
  for (var s=0; s<=this.size(); s++) { 
    for (var i=0,l=arr.length; i<l; i++) {    
      str += arr[i].substring(s, s+1)
    }
  }
  return str;
}

module.exports = Crypto;