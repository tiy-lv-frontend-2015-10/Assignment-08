$(document).ready(function(){


$("#span1").html(avgPrice);


//$("#span2").append(newArr.foreach(function(obj)).html(obj.title, obj.price));


//$("#add").on("click", function() {  //in this section, for each of the four type of equations, set up an event where the click calculates
//	var num_1 = $("#num_one").val(); //the equation with the two numbers entered onto the page and then returns the answer
//    var num_2 = $("#num_two").val();  // into the html page
//    $("#answer").html(add(num_1, num_2));
//})




});

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

newArr.forEach(function(obj) {
	$("#span2").append("<p>" + obj.title + ", $" + obj.price + "</p>");
});

//3. Which item has a GBP currency code?


var GBPArr = items.filter(function (GBPObj) {
	if (GBPObj.currency_code === "GBP") {
		return true;
	} else {
		return false;
	}
});

var arrGBP = GBPArr.map(function(obj) {
	return {
		title: obj.title,
		price: obj.price
	}
});

arrGBP.forEach(function(obj) {
	$("#span3").append(obj.title).append(obj.price);
});

//4.  Display a list of all items made of wood - the element is "materials"


//ar matArr = items.map(function(obj){
//	return {
//		title: obj.title,
//		materials: obj.materials
//	}
//});

var matArray = items.filter(function(item) {
	var isWood = false;
item.materials.forEach(function(material) {
		if (material === "wood") {
			isWood = true;
		}
	});
		return isWood;
});

matArray.forEach(function(obj) {
	$("#span4").append("<p>" + obj.title + "</p>");
});



// now map it
// var woodArray = isWood.map(function(item) {
//
//});




//5. Which items are made of 8 or more materials? "materials" //



var moreFilter = items.filter(function(obj) {
	if(obj.materials.length>= 8)
	{
		return obj.materials;
	}
});
var materialsNum = moreFilter.map(function(obj) {
	return {'title':obj.title,'materials':obj.materials,'Materials length':obj.materials.length};
});

materialsNum.forEach(function(obj) {
	$("#span5").append("<p>" + obj.title + " - Materials:" + obj.materials + " - " + obj.materials.length + " materials total" +"</p>");
});

//materialsNum.forEach(function(obj) {
//	$("#span5").append("<p>" + obj.title + ", " + obj.materials + ", " + obj.materials.length + "</p>");
//});


//6. How many items were made by their sellers?  who_made = "i_did"

var whoMade = items.filter(function(obj) {
	if (obj.who_made === "i_did") {
		return true;
	} else {
		return false;
}
});
var whoMadeThis = whoMade.filter(function(obj) {
	return(whoMade.length);
});

$("#span6").append(whoMade.length + " were made by their sellers");


/// This section gets the items into the html




