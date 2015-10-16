$(document).ready(function(){

$("#answer1").html(avgPrice);















});

var totalPrice = items.reduce(function(a, b) {                  //calculates average price

	if (typeof a === "number") {
		return a + b.price;
	} else {
		return a.price + b.price;
	}
});

var avgPrice = (totalPrice/items.length).toFixed(2); 				///////










priceArr = items.filter(function(btwnObj){ 						//shows items between 14-18
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
});		

newArray.forEach(function(obj){
	$("#answer2").append("Title:").append(obj.title).append("Price:").append(obj.price);
});
															///////






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

array.forEach(function(obj){
	$("#answer3").append("Title:").append(obj.title).append("Price:").append(obj.price);
});



/*var matArray = items.map(function(obj) {
	return {
		title:obj.title,
		materials:obj.materials
	}
});	

var test=items.filter(function(obj){
	for(i=0; i<matArray.length; i++) {
	if(matArray[i]==="wood") {
		return true;
	} else {
		return false
	}
}
});*/
 
 var newArr = items.filter(function(item) {
 	var isWood=false;
 	item.materials.forEach(function(material){
 		if(material === "wood") {
 			isWood = true;
 		}
 	 
 	 });
 	return isWood;
 });








var moreFilter= items.filter(function(obj) {				//8 or more
	if(obj.materials.length>=8)
		 {
		 	return true;
		 }
});

var test= moreFilter.map(function(obj){
	 return {'title':obj.title,'materials':obj.materials,'materialLength':obj.materials.length};
});

test.forEach(function(obj){
	$("#answer5").append("Title:").append(obj.title).append("Price:").append(obj.price);
});										//


var sellerFilter = items.filter(function(obj){				//who_made
	if(obj.who_made==="i_did") {
		return true;
	} else {
		return false;
	}
});



