var Pangram = function(str) {
	this.str = str.toLowerCase() || '';
};

Pangram.prototype.isPangram = function() {
	var cntr=0;
	var letters = 'abcdefghijklmnopqrstuvwxyz';
	for (var i=0; i<letters.length; i++) {
		if (this.str.indexOf(letters.charAt(i))!==-1) { cntr++; }
	}
	return (cntr>=26);
}


module.exports = Pangram;