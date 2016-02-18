var Acronyms = function() {};

Acronyms.parse = function(str) {
  var str = str || '';
  str = str.replace('-', ' ').replace(/([a-z])([A-Z])/g, '$1 $2');
  return str.split(/\s/).reduce(function(prev,curr,idx,arr) {
    return prev + curr.charAt(0);
  }, '').toUpperCase();  
}



module.exports = Acronyms;