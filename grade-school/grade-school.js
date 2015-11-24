var School = function() {
	this._roster = {};
}

School.prototype.roster = function() {
    for (var grade in this._roster) {               //console.log(grade + ' : ' + this._roster[grade]);
        this._roster[grade].sort();
    }
    return this._roster;
}
School.prototype.add = function(name, grade) {
	this._roster[grade] = this._roster[grade] || [];
	this._roster[grade].push(name);
	//sorting not explicitly required (based upon spec) but would make a wise addtion.
};
School.prototype.grade = function(grade) {
	return (this._roster[grade]) ? this._roster[grade].sort() : [];
}


module.exports = School;





