var song = {
	
	food: ['', 'fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'],
	txt2: ['',
		'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n',
		'It wriggled and jiggled and tickled inside her.\n',
		'How absurd to swallow a bird!\n',
		'Imagine that, to swallow a cat!\n',
		'What a hog, to swallow a dog!\n',
		'Just opened her throat and swallowed a goat!\n',
		'I don\'t know how she swallowed a cow!\n',
		'She\'s dead, of course!\n'
	],
	verse: function (num) {														//console.log('song.verse('+num+')');
		var str = '';
		var j = num+1;
		for (var i=1; i<=num; i++) {
			--j; 
			//first
			if (i===1) {
				str += 'I know an old lady who swallowed a '+song.food[j]+'.\n' + song.txt2[j];		
				if (num===8) {break;}			
			} else {
				//normal
				str += 'She swallowed the '+song.food[j+1]+' to catch the '+song.food[j]+'.\n'
				//2nd to last
				if (i===num-1) {		//spider wriggled...
					str =  str.substring(0, str.length-2);	//remove '\n'
					str += song.txt2[j].replace('It ', ' that ');
				}
				//last
				if (j===1) {str+=song.txt2[1];}			//console.log('adding '+song.food[j]+'... (' + i + ',' + j + ')');
			}
		}
		//console.log(str+'--------------');
		return str;
	},
	verses: function(from, to) {
		var str='';
		for (var i=from; i<=to; i++) {
			str += song.verse(i)+'\n';
		}
		//console.log(str);	
		return str; 	
	}
	
}


module.exports = song;