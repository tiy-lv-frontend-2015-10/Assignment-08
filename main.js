$(document).ready(function(){
















});

var totalPrice = items.reduce(function(a, b) {                  //calculates average price
	console.log(typeof a)
	if (typeof a === "number") {
		return a + b.price;
	} else {
		return a.price + b.price;
	}
});

var avgPrice = (totalPrice/items.length).toFixed(2); 				///////










var priceArr = items.filter(function(btwnObj){ 						//shows items between 14-18
	if(btwnObj.price>14 && btwnObj.price<18) {
		return true;
	} else {
		return false;
	}
});



var newArray = priceArr.map(function(obj) {
	return {
		title: obj.title,
		 price: obj.price
	}
});																	///////







var gbpArr = items.filter(function(gbpObj){							// Shows gbp
	if(gbpObj.currency_code==="GBP") {
		return true;
	} else {
		return false;
	}
});										



var array = gbpArr.map(function(obj) {
	return {
		title: obj.title,
		 price: obj.price
	}
});																	//////////






console.log(array)