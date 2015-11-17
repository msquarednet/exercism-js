var dnaTranscriber = function() {};

dnaTranscriber.prototype.toRna = function(a) {
	var arr = a.split('');
	for (var i=0; i<arr.length; i++) {
		switch(arr[i]) {
			case 'G' : arr[i]='C'; break;
			case 'C' : arr[i]='G'; break;
			case 'T' : arr[i]='A'; break;
			case 'A' : arr[i]='U'; break;
		}
	}
	return arr.join('');
}
dnaTranscriber.prototype.toDna = function(a) {
	var arr = a.split('');
	for (var i=0; i<arr.length; i++) {
		switch(arr[i]) {
			case 'C' : arr[i]='G'; break;			
			case 'G' : arr[i]='C'; break;
			case 'U' : arr[i]='A'; break;
			case 'A' : arr[i]='T'; break;
		}
	}
	return arr.join('');
}



module.exports = dnaTranscriber;