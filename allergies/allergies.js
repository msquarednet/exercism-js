var Allergies = function(num) {
  //console.log('\n--this.num=', num);
  this.num = num%256 || 0;
  this.allergies = ['eggs','peanuts','shellfish','strawberries','tomatoes','chocolate','pollen','cats'];
}

Allergies.prototype.list = function() {
  var result = [];
  for (var i=this.allergies.length-1; i>=0; i--) {
    //console.log(this.allergies[i], Math.pow(2,i));
    if (this.num >= Math.pow(2,i)) {
      //console.log('=>', Math.pow(2,i), this.num);
      result.push(this.allergies[i]);
      this.num -= Math.pow(2,i);
    }
  }
  //console.log('\n--result=', result);
  return result.reverse();
}

Allergies.prototype.allergicTo = function(str) {
  var bool = false;
  var idx = this.allergies.indexOf(str);
  if (idx!==-1) {
    //console.log(str+'?', 'allergies['+ idx+']', this.allergies[idx], Math.pow(2,idx));
    if (this.num >= Math.pow(2,idx)) {bool=true};
  }
  return bool;
}


module.exports = Allergies;