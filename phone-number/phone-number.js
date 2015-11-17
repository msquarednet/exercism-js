var PhoneNumber = function(phone) {
	this.phone = phone;
}


PhoneNumber.prototype.number = function() {
	var invalid_str = '0000000000';
	var cleaned = this.phone.replace(/[^\d]/g, '').trim();

	if (cleaned.length<10 || cleaned.length>11) {cleaned=invalid_str;}
	else if (cleaned.length===10 || (cleaned.length===11 && cleaned.charAt(0)==='1')) {
		if (cleaned.length===11 && cleaned.charAt(0)==='1') {
			cleaned = cleaned.slice(1);		
		}
	} else {cleaned=invalid_str;}

	return cleaned;
}

PhoneNumber.prototype.areaCode = function() {
	var cleaned = this.number(this.phone);
	return cleaned.slice(0,3);
}

PhoneNumber.prototype.toString = function() {
	var cleaned = this.number(this.phone);
	var str = '(' + this.areaCode(cleaned) + ') ' + cleaned.slice(3,6) + '-' + cleaned.slice(6);
	return str;
}


module.exports = PhoneNumber;