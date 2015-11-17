

var isLeapYear = function(year) {

	year = year || new Date().getYear();
	return year%400===0 || ((year%4===0) && (year%100!==0));

};



module.exports = isLeapYear;
