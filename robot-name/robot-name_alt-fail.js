var Robot = function () {
	this.letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	this.name = generateValidName();
	
	function ranNum () {return this.letters[Math.floor(Math.random()*this.letters.length)]};
	function ranLet () {return this.numbers[Math.floor(Math.random()*this.numbers.length)]};	

	function generateName() {
		var str = '';
		for (var i=1; i<=2; i++) {str += this.ranNum();}
		for (var i=1; i<=3; i++) {str += this.ranLet();}
		//console.log('generateName returns: '+str);
		return str;
	}
	function generateValidName () {
		var str = this.generateName();

		while ( !this.isValidName(str) ) {
			//console.log('INVALID: '+str+'!!!!!!!!!!!!!!!!!!!');
			str = this.generateName();
		}
		//console.log('Valid!: ' + str);
		return str;
	}	
	
	function isValidName (str) {
		var valid = (Robot.takenObj[str]) ? false : true;
		if (valid) {Robot.takenObj[str]=1;}
		return valid;
	}	
	
	return {generateValidName: generateValidName};
};


Robot.takenObj = {};	//static var

Robot.prototype.reset = function() {
	this.name = this.generateValidName();
}


//make these private??...
//Robot.prototype.generateName = function () {
//	var str = '';
//	for (var i=1; i<=2; i++) {str += this.ranNum();}
//	for (var i=1; i<=3; i++) {str += this.ranLet();}
//	//console.log('generateName returns: '+str);
//	return str;
//}

//Robot.prototype.generateValidName = function() {
//	var str = this.generateName();
//	
//	while ( !this.isValidName(str) ) {
//		//console.log('INVALID: '+str+'!!!!!!!!!!!!!!!!!!!');
//		str = this.generateName();
//	}
//	//console.log('Valid!: ' + str);
//	return str;
//}




//Robot.prototype.ranNum = function() {return this.letters[Math.floor(Math.random()*this.letters.length)]};
//Robot.prototype.ranLet = function() {return this.numbers[Math.floor(Math.random()*this.numbers.length)]};

//Robot.prototype.isValidName = function(str) {
//	var valid = (Robot.takenObj[str]) ? false : true;
//	if (valid) {Robot.takenObj[str]=1;}
//	return valid;
//}



module.exports = Robot;


