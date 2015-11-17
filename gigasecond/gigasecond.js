var Gigasecond = function(d) {
	this.input_date = d;
}

Gigasecond.prototype.date = function() {
	var output_date = new Date( Date.parse(this.input_date) + 1000000000000 );
	output_date.setHours(0,0,0,0);	//midnight
	return output_date;
}


module.exports = Gigasecond;