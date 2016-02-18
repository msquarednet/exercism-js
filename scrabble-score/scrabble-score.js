var scrabbleScore = function(str) {
  var total = 0;
  var str = (str) ? str.toLowerCase() : '';
  var aa = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var a1 = [ 1,  3,  3,  2,  1,  4,  2,  4,  1,  8,  5,  1,  3,  1,  1,  3,  10, 1,  1,  1,  1,  4,  4,  8,  4,  10 ];
  var obj= {};
  
  for (var i=0; i<26; i++)               { obj[aa[i]] = a1[i] }      //populate obj dictionary
  for (var i=0,l=str.length; i<l; i++)   { total += obj[str[i]] }
  return total;
}


module.exports = scrabbleScore;





























  // total = str.split('').reduce(function(prev,curr,idx,arr) {     //also works
  //   return prev + parseInt(obj[arr[idx]],10);
  // }, 0);