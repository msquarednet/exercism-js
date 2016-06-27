var Isogram = function (str) {
  this.str = str || '';
}

Isogram.prototype.isIsogram = function() {
  var letters = this.str.replace(/\W/g,'').toLowerCase().split('');
  return letters.every(function(val,i,arr){
     return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}


module.exports = Isogram;