var arr = [
	{
		"day":"Sunday",

	},

	{
		"day":"Monday",

	},

	{
		"day":"Tuesday",

	}, 

	{
		"day":"Wednesday",

	},

	{
		"day":"Thursday",

	},
	
	{
		"day":"Friday",

	},
	{
		"day":"Saturday",

	}
];
//FOR EACH ARRAYS
/*arr.forEach(function(dayObj){
		//console.log(dayObj.day);
		//console.log(dayObj["day"]);
		//console.log(dayObj.abbr);
		//console.log(dayObj.index);
		//console.log(dayObj);
});*/



//MAP ARRAYS
/*var mappedArr = arr.map(function(dayObj){
		var name =dayObj.day;
		return {
			"day":name,
			"abbr": name.substr(0,3)
				}
});
console.log(mappedArr);
*/



//FILTERED ARRAYS
/*var filteredArray = arr.filter(function(dayObj){
		return dayObj.day.charAt(0) ==="T";
		/*if (dayObj.day.charAt(0) === "T") {
				return true;
			}else{
			return false;
		}
		};
});
console.log(filteredArray);
*/



//REDUCE ARRAYS
var myValue = arr.reduce(function(a, b){
		if (a.day.length > b.day.length){
			return a;
		}else{
			return b;
		}
});

var myValue2 = arr.reduce(function(a, b){
	if(typeof a === "string"){
		if (a.length > b.day.length) {
			return a;
		}else{
			return b.day;
		}
	}else{
		if (a.day.length > b.day.length){
			return a.day;
		}else{
			return b.day;
		}
	}
});
console.log(myValue2)