var anagram = function(ana) {
	
	function matches(arr) {
		var args = (arr instanceof Array) ? arr : Array.prototype.slice.call(arguments);	
		var marr = [];
		for (var i=0; i<args.length; i++) {
			if (isAnagram(args[i])) {marr.push(args[i])}
		}
		return marr;
	}
	function isAnagram(item) {
		var bool = false;
		var str1 = item.toLowerCase().split('').sort().join('').trim();
		var str2 =  ana.toLowerCase().split('').sort().join('').trim();		
		var item1= item.toLowerCase().trim();
		var ana1 =  ana.toLowerCase().trim();
		if (str1===str2 && !(item1===ana1)) {bool = true;};
		return bool;
	}
	return {
		matches: matches
	}

}


module.exports = anagram;