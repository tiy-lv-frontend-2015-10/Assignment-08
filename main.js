$(document).ready(function(){

//1. Show me how to calculate the average price of all items.

var totalPrice = items.reduce(function(a,b) {  // typeof a is equal to a number, return the value of a
	//console.log(typeof a)
	if (typeof a === "number") {
			return a + b.price;
	} else {
		return a.price + b.price;  // a.price and b.price 
	}
})

var avgPrice = (totalPrice/items.length).toFixed(2);


// 2. Show me how to get an array of items that cost between $14 and $18.

var priceArr = items.filter(function (btwnObj) {
	if (btwnObj.price > 14.00 && btwnObj.price < 18.00) {
		return true;
	} else {
		return false;
	}
});

var newArr = priceArr.map(function(obj) {
	return {
		title: obj.title,
		price: obj.price
	}
});

//3. Which item has a GBP currency code?


var GBPArr = items.filter(function (GBPObj) {
	if (GBPObj.currency_code === "GBP") {
		return true;
	} else {
		return false;
	}
});

var Arr = GBPArr.map(function(obj) {
	return {
		title: obj.title
	}
});



//4.  Display a list of all items made of wood - the element is "materials"


var matArr = items.map(function (obj) {
	return {
		title: obj.title,
		materials: obj.materials
	}
	var woodArray = [];

	for (i = 0; i < matArr.length; i++) {
		if (obj.materials[i] === "wood") {
		woodArray.push(matArr[i]);
	}
	}
});

console.log(matArr);

//5. Which items are made of 8 or more materials? "materials" //


//6. How many items were made by their sellers?  who_made = "i_did"


});




