
var strain = {

  karr: [],   //keep array
  darr: [],   //discard array
  
  _strain: function(arr,fn,flag) {
    this.karr = [];
    this.darr = [];
    arr.forEach(function(e) {
      if (fn(e)) {strain.karr.push(e)} else {strain.darr.push(e)};
    });    
    return (flag) ? this.karr : this.darr;
  },
  
  keep    : function(arr,fn) { return this._strain(arr,fn, 1) },
  discard : function(arr,fn) { return this._strain(arr,fn, 0) }

};


module.exports = strain;













    // console.log(this.karr, this.darr)
    // console.log(strain,'\n')