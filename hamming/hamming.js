var compute = function(a,b) {

	var mutations = 0;
	if (a.length !== b.length) {throw new Error('DNA strands must be of equal length.');}
	
	for (var i=0; i<a.length; i++) {
		if (a.charAt(i)!==b.charAt(i)) {mutations++;}
	}
	return mutations;

};



module.exports = compute;