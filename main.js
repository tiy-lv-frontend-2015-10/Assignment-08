// GETTERS*************************************************************

//For Answer 1, get sum of the prices of all elements of the array
function getTotal() {
	var priceTotal = items.reduce(function(a, b) {
		if (typeof a === "number") {
			return a + b.price;
		}else {
			return a.price + b.price;
		}
	});
	return priceTotal;
}

//For Answer 2, get array of objects with prices between 14.00 & 18.00
function priceRange() {
	var rangeObjs = items
	.filter(function(item) {
		if ((item.price > 14.00) && (item.price < 18.00)) {
			return true;
		} else {
			return false;
		}
	})
	.map(function(item){
		return item.title;
	})
	return rangeObjs;
}
//For Answer 3, find element with price in Great Britain Pounds (GBP)
function sinkBP() {
	var gbp = items.filter(function(item) {
		if (item.currency_code === "GBP") {
			return true;
		}else {
			return false;
		}
	});
	return gbp;
}

//For Answer 4, find elements with "wood" as a value in "materials":
function gotWood() {
	var woody = items.filter(function(item){
		var isWood = false;
		item.materials.forEach(function(material){
		 	if (material === 'wood') {
		 	  isWood =true;
		 	}
		})
		return isWood;
	})
	return woody;
}
//For Answer 5, find items made with 8 or more materials - display title and list of materials
function ateEnough() {
	var lottaMats = items.filter(function(item){
		var ateIt = false
		item.materials.forEach(function(material){
			if (item.materials.length >= 8) {
				ateIt = true;
			}
		})
		return ateIt;
	})
	console.log(lottaMats);
	return lottaMats;
}
//For Answer 6, find items made by their sellers - display number of seller/made items
function iMadeIt() {
	var homey = 0;
	items.filter(function(item){
		if (item.who_made === "i_did") {
			homey +=1;
		}
	})
	return homey;
}

$(document).ready(function() {



// SETTERS*************************************************************

//For Answer 1, compute the average price, and insert it into the DOM
function priceAverage() {
	var avgP = (getTotal() / items.length).toFixed(2);
	$('#ans1').html("The average price is $" + avgP);
}
//For Answer 2 - display title of each item inside price range
function showInRange() {
	$('#ans2').html('');
	priceRange().forEach(function(item) {
		$('#ans2').append(item + '<br /><br />');
	});
}
//For Answer 3 - display title and price in GBP
function showGBP() {
	$('#ans3').html('');
	sinkBP().forEach(function(item) {
		$('#ans3').append(item.title + '  costs  ' + '&pound' + item.price + '<br /><br />');
	});
}
//For Answer 4 - display title and indicate wood as material
function hasWood() {
	$('#ans4').html('');
	gotWood().forEach(function(item) {
		$('#ans4').append(item.title + ' is made of wood' + '<br /><br />');
	})
}
//For Answer 5 - display title, number of materials - vertically list materials array
function eightMatOut() {
	var roster = ateEnough();
	console.log(roster);
	$('#ans5').html('');
 	 for (i = 0; i < roster.length; i++) {
		 var rosterMat = roster[i].materials;
		 $('#ans5').append(roster[i].title + ' has ' + rosterMat.length + ' materials:' + '<br /><br />')
		 rosterMat.forEach(function(material) {
			 $('#ans5').append('<p>' + material + '</p>')
		 })
	 };
}

//For Answer 6 - display [number] "were made by their sellers"
function madeByMe() {
	$('#ans6').html(iMadeIt() + " items were made by their sellers.")
}
//FUNCTION CALLS******************************************************

//For Answer 1
priceAverage();
//For Answer 2
showInRange();
//For Answer 3
showGBP();
//For Answer 4
hasWood();
//For Answer 5
eightMatOut();
//For Answer 6
madeByMe();

})
