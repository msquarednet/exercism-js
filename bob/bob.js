var Bob = function() {};

Bob.prototype.hey = function(input) {

	var qstr = 'Sure.';
	var yellstr = 'Whoa, chill out!';
	var nostr = 'Fine. Be that way!';
	var whatstr = 'Whatever.'

	function isYelling(input) 		{return input.toUpperCase()===input && input.toLowerCase()!==input;}
	function isQuestioning(input)	{return input.charAt(input.length-1)==='?';}
	function isNothing(input) 		{return input.trim()==='';}

	//order matters...
	if (isYelling(input)) 		{return yellstr;}
	if (isQuestioning(input))	{return qstr;}
	if (isNothing(input)) 		{return nostr;}
	return whatstr;

};


module.exports = Bob;
