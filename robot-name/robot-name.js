var Robot = function () {
	this.name = this.generateValidName();
};



Robot.takenObj = {};	//static var

Robot.prototype.reset = function() {
	this.name = this.generateValidName();
}



Robot.prototype.generateName = function () {
	var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	var str = '';
	for (var i=0; i<2; i++) {str += letters[Math.floor(Math.random()*letters.length)];}
	for (var i=0; i<3; i++) {str += numbers[Math.floor(Math.random()*numbers.length)];}	//console.log('generateName returns: '+str);
	return str;
}

Robot.prototype.generateValidName = function() {
	var str = this.generateName();
	while ( !this.isValidName(str) ) {								
		str = this.generateName();
	}
	return str;
}

Robot.prototype.isValidName = function(str) {
	var valid = (Robot.takenObj[str]) ? false : true;
	if (valid) {Robot.takenObj[str]=1;}
	return valid;
}



module.exports = Robot;


