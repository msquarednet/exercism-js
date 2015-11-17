var words = function(str) {
	
	str = str.replace(/\t\t+/g, '').replace(/\s\s+/g, ' ').trim();
	//console.log('-->' + str + ' len='+str.length);
	
	var tally = {};
	var arr = str.split(/\s/);

	for (var i=0; i<arr.length; i++) {
		//console.log(arr[i]);
		if (tally[arr[i]] && typeof(tally[arr[i]])!=='function') {
			//console.log(arr[i] + ' exists. It\'s value is: ' + tally[arr[i]]);
			tally[arr[i]] = ++tally[arr[i]];			
		} else {
			//console.log(arr[i] + ' is new.');
			tally[arr[i]] = 1;			
		}
	}

	return tally;

};


module.exports = words;