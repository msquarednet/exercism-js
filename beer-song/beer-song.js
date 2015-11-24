var Beer = {
	
	verse: function (num) {
		var curr = num-1;		//current number of bottles
		var str='';
		switch(num) {
			case 2:
				str = num + ' bottles of beer on the wall, '+ num + ' bottles of beer.\nTake one down and pass it around, ' + curr +' bottle of beer on the wall.\n';
				break;
			case 1:
				str = num + ' bottle of beer on the wall, ' + num + ' bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
				break;
			case 0: 
				str = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
				break;
			default:
				str = num + ' bottles of beer on the wall, '+ num + ' bottles of beer.\nTake one down and pass it around, ' + curr +' bottles of beer on the wall.\n';
		}
		return str;
	},
	sing: function(from, to) {
		var to = to || 0;
		var song='';
		for (var i=from; i>=to; i--) {
			song += Beer.verse(i);
			if (i>to) {song += '\n';}
		}
		return song;
	}
	
}

module.exports = Beer;