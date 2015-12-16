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








???????
function School() {
    this.schoolRoster = {};
}

School.prototype = {
    roster: function() {
        return this.schoolRoster;
    },
    add: function(name, grade) {
        this.schoolRoster[grade] ? this.schoolRoster[grade].push(name) : this.schoolRoster[grade] = [name];
        this.schoolRoster[grade] = this.schoolRoster[grade].sort(function(a,b){ return a>b });
    },
    grade: function(grade) {
        return this.schoolRoster[grade] ? this.schoolRoster[grade] : [];
    }
}


module.exports = School;










???????????
module.exports = function School() {
  var roster = {};

  function getRoster() {
    return roster;
  }

  function getGrade(grade) {
    if (roster.hasOwnProperty(grade)) {
      return roster[grade];
    }
    return [];
  }

  function addToRoster(name, grade) {
    if (roster.hasOwnProperty(grade)) {
      roster[grade].push(name);
      roster[grade] = roster[grade].sort();
    } else {
      roster[grade] = [name];
    }
  }

  return {
    add: addToRoster,
    roster: getRoster,
    grade: getGrade
  };
};