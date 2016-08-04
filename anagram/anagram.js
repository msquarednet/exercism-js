let anagram = function(ana) {
	
	function matches(arr) {
		let args = (arr instanceof Array) ? arr : Array.prototype.slice.call(arguments);	
		let marr = [];
		for (let i=0; i<args.length; i++) {
			if (isAnagram(args[i])) {marr.push(args[i])}
		}
		return marr;
	}
	function isAnagram(item) {
		let bool = false;
		let str1 = item.toLowerCase().split('').sort().join('').trim();
		let str2 =  ana.toLowerCase().split('').sort().join('').trim();		
		let item1= item.toLowerCase().trim();
		let ana1 =  ana.toLowerCase().trim();
		if (str1===str2 && !(item1===ana1)) {bool = true;};
		return bool;
	}
	return {
		matches: matches
	}

}


module.exports = anagram;