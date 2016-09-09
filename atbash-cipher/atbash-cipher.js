function atbash() {}

atbash.encode = function(str) {    
  var input,output,del;
  var a,b,c,d;
  input = str.toLowerCase().replace(/[\s,.]/g, '').split('') || [];
  a = 'abcdefghijklmnopqrstuvwxyz'.split('');
  b = a.concat().reverse();
  c = input.map(function(x) { 
    return (!isNaN(parseInt(x,10))) ? x : b[a.indexOf(x)]; 
  });
  d = [];
  while (c.length) {
    del = c.splice(0,5);
    del.push(' ');                 
    d.push(del.join(''))
  }
  output = d.join('').trim();      
  return output;
};


module.exports = atbash;