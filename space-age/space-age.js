function SpaceAge(secs) {
	this.seconds = secs;
}

var planets = {};
planets.Earth = 1;
planets.Mercury = 0.2408467;
planets.Venus = 0.61519726;
planets.Mars = 1.8808158;
planets.Jupiter = 11.862615;
planets.Saturn = 29.447498;
planets.Uranus = 84.016846;
planets.Neptune = 164.79132;	

Object.keys(planets).forEach(function(planet) {
	SpaceAge.prototype['on'+planet] = function() {
		return Math.round( this.seconds / 31557600 / planets[planet] * 100 ) / 100;
	};	
})


module.exports = SpaceAge;