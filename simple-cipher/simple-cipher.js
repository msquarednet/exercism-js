function Cipher(k) {
  this.key = (arguments.length) ? k : 'aaaaaaaaaa'
  Cipher.validateKey(this.key);

  var letters = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
  var keyshift = []   //[0,0,0,0...] for aaaa...
  for (var i=0, l=this.key.length; i<l; i++) {
    keyshift[i] = letters.indexOf(this.key[i])
  }

  this.cipherify = function(str, one) {
    let result = str.split('')
    for (var i=0, l=result.length; i<l; i++) {
      result[i] = letters[ letters.indexOf(result[i]) + one*keyshift[i] ]
    }
    return result.join('')
  }
}

Cipher.validateKey = function(k) {
  if (k.match(/[A-Z]/) || k.match(/\d/) || k.length===0) {throw new Error('Bad key')} 
}

Cipher.prototype.encode = function(str) {return this.cipherify(str,  1)}
Cipher.prototype.decode = function(str) {return this.cipherify(str, -1)}



module.exports = Cipher