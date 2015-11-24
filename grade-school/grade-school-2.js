var School = (function() {
	this._roster = {};

	function roster() {
		for (grade in this._roster) {				//console.log(grade + ' : ' + this._roster[grade]);
			this._roster[grade].sort();
		}
		return this._roster;
	}
	function add(name, grade) {
		if (!this._roster[grade]) {
			this._roster[grade] = [name];
		} else {
			this._roster[grade].push(name);
		}
	};
	function grade(grade) {
		var result = [];
		if (this._roster[grade]) {
			result = this._roster[grade].sort();
		}
		return result;
	}

	return {
		roster: roster,
		add: add, 
		grade: grade
	}
})();