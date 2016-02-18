var circularBuffer = function(len) {
  var ir = 0;   //indexRead
  var iw = 0;   //indexWrite
  var arr= new Array(len);
  
  return {
    read: function() {
      if (!arr[ir]) {throw bufferEmptyException()}; 
      var val = arr[ir];  ir++;
      return val;
    }, 
    write: function(str) {
      if (str) {
        if (iw >= arr.length) {throw bufferFullException()}; 
        arr[iw]=str;  iw++;
      }
    },
    forceWrite: function(str) {
      if (str) {
        if (iw >= arr.length) {
          arr.shift(); arr.push(undefined);
          iw=arr.length-1;
        }
        arr[iw]=str;  iw++;
      }
    },
    clear: function() {
      arr=new Array(len); ir=0; iw=0;
    }
  }  
};
var bufferEmptyException= function() {return 'emptiness'};
var bufferFullException = function() {return 'fullness'};




module.exports = {
  circularBuffer: circularBuffer,
  bufferEmptyException: bufferEmptyException,
  bufferFullException: bufferFullException
};