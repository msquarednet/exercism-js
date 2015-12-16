function ETL() {};

ETL.prototype.transform = function(obj) {
	var newObj = {};
	var arr, letter, i,j;
	for (i in obj) {	//console.log(i, obj[i]);
		arr = obj[i];
		for (j=0; j<arr.length; j++) {
			letter = arr[j].toLowerCase();
			newObj[letter] = Number(i);
		}
	}
	return newObj;
}



module.exports = ETL;