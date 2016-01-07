var SpaceAge = function(age) {
    this.seconds = age;
};

var ratios = {
    Earth: 1,
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132
};

Object.keys(ratios).forEach(function(planet) {
    SpaceAge.prototype['on' + planet] = function() {
        return Math.round(this.seconds * 100 / 31557600 / ratios[planet]) / 100;
    };
});

module.exports = SpaceAge;