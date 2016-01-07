var SpaceAge = function SpaceAge(secs) {
	this.seconds = secs;
}
//static 'constants'
var planets = {};
planets.Earth = 1;
planets.Mercury = 0.2408467;
planets.Venus = 0.61519726;
planets.Mars = 1.8808158;
planets.Jupiter = 11.862615;
planets.Saturn = 29.447498;
planets.Uranus = 84.016846;
planets.Neptune = 164.79132;	
	
/*
SpaceAge.prototype.onEarth = function() {
	return Number( (this.seconds/31557600).toFixed(2) );
}
SpaceAge.prototype.onMercury = function() {
	return Math.round( this.onEarth(this.seconds) / planets.Mercury * 100 ) / 100;
}
SpaceAge.prototype.onVenus = function() {
	return Math.round( this.onEarth(this.seconds) / planets.Venus * 100 ) / 100;
}
SpaceAge.prototype.onMars = function() {
	return Math.round( this.onEarth(this.seconds) / planets.Mars * 100 ) / 100;
}
SpaceAge.prototype.onJupiter = function() {
	return Math.round( this.onEarth(this.seconds) / planets.Jupiter * 100 ) / 100;
}
SpaceAge.prototype.onSaturn = function() {
	return Math.round( this.onEarth(this.seconds) / planets.Saturn * 100 ) / 100;
}
SpaceAge.prototype.onUranus = function() {
	return Math.round( this.onEarth(this.seconds) / planets.Uranus * 100 ) / 100;
}
SpaceAge.prototype.onNeptune = function() {
	return Math.round( this.onEarth(this.seconds) / planets.Neptune * 100 ) / 100;
}
*/

for (var planet in planets) {//key,val
	console.log(planet);
	console.log(planets[planet]);
	var val = planets[planet];
	
	SpaceAge.prototype[planet] = planets[planet]
	console.log('->'+SpaceAge.prototype[planet]);

	SpaceAge.prototype['on'+planet] = function() {
		console.log('');
		console.log(this.seconds);		
		console.log(planets[planet]);
		console.log(SpaceAge.prototype[planet]);
		console.log(Math.round( this.seconds / 31557600 / SpaceAge.prototype[planet] * 100 ) / 100);
		
		// (function(pval) {
		// 	//var pval = planets[planet];
		// 	console.log('pval='+pval);
		// 	return Math.round( this.seconds / 31557600 / pval * 100 ) / 100;			
		// }(val))
		return Math.round( this.seconds / 31557600 / SpaceAge.prototype[planet] * 100 ) / 100;
	};
	
}

Object.keys(planets).forEach(function(planet) {
	SpaceAge.prototype['on'+planet] = function() {
		console.log('');
		console.log(this.seconds);		
		console.log(planets[planet]);
		console.log(SpaceAge.prototype[planet]);
		console.log(Math.round( this.seconds / 31557600 / SpaceAge.prototype[planet] * 100 ) / 100);
		

		return Math.round( this.seconds / 31557600 / planets[planet] * 100 ) / 100;
	};	
})

var sa = new SpaceAge(10000);
for (var prop in sa) {
	console.log('umm.....');
	console.log(prop, sa[prop]);
}

// Object.keys(planets).forEach(function(planet) {
//     SpaceAge.prototype['on' + planet] = function() {
//         return Math.round(this.seconds * 100 / 31557600 / planets[planet]) / 100;
//     };
// });

module.exports = SpaceAge;
//venus cheat -> 9.79, not 9.78