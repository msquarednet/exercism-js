function accumulate(arr, fn) {
  var result = [];
  for (var i=0,l=arr.length; i<l; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}


module.exports = accumulate