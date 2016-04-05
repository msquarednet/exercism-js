var Raindrops = function() {}

Raindrops.prototype.convert = function(num) {
  var val = num.toString();
  if (num%3===0 || num%5===0 || num%7===0) {
    val = '';
    if (num%3===0) {val += 'Pling'};
    if (num%5===0) {val += 'Plang'};
    if (num%7===0) {val += 'Plong'}; 
  }
  return val;
}



module.exports = Raindrops;