function SpaceAge(secs) {
	this.seconds = secs;
}
//static 'constants'
SpaceAge.Mercury = 0.2408467;
SpaceAge.Venus = 0.61519726;
SpaceAge.Mars = 1.8808158;
SpaceAge.Jupiter = 11.862615;
SpaceAge.Saturn = 29.447498;
SpaceAge.Uranus = 84.016846;
SpaceAge.Neptune = 164.79132;	
	
	
SpaceAge.prototype.onEarth = function() {
	return Number( (this.seconds/31557600).toFixed(2) );
}
SpaceAge.prototype.onMercury = function() {
	return Math.round( this.onEarth(this.seconds) / SpaceAge.Mercury * 100 ) / 100;
}
SpaceAge.prototype.onVenus = function() {}
	return Math.round( this.onEarth(this.seconds) / SpaceAge.Venus * 100 ) / 100;
}
SpaceAge.prototype.onMars = function() {
	return Math.round( this.onEarth(this.seconds) / SpaceAge.Mars * 100 ) / 100;
}
SpaceAge.prototype.onJupiter = function() {
	return Math.round( this.onEarth(this.seconds) / SpaceAge.Jupiter * 100 ) / 100;
}
SpaceAge.prototype.onSaturn = function() {
	return Math.round( this.onEarth(this.seconds) / SpaceAge.Saturn * 100 ) / 100;
}
SpaceAge.prototype.onUranus = function() {
	return Math.round( this.onEarth(this.seconds) / SpaceAge.Uranus * 100 ) / 100;
}
SpaceAge.prototype.onNeptune = function() {
	return Math.round( this.onEarth(this.seconds) / SpaceAge.Neptune * 100 ) / 100;
}


module.exports = SpaceAge;
//venus cheat -> 9.79, not 9.78