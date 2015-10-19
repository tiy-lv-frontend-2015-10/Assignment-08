/*
//array.forEach()
Goes through each loop

//array.map() goes inside object literal item
ex.grabs first three letter 


//array.filter()
returns specific items that you want (segregates)


//array.reduce()
replaces b with a if b is greater than a and checks if its a string and
checks if a length is great than the day length of b


///////////////////////////////////////////////////////////////////////////////////

/*1.Show me how to calculate the average price of all items.
The average price is $23.63*/

//make a function  for the document to call
//then do items.reduce function to add all the items inside array's object
//inside items.reduce function do an if else statement
//if a is number it'll RETURN the addition of item a with b.price  
//if else it'll RETURN the solution of both a.price and b.price divided by the number of objects
//outside of the if else function you have to give this function(items.reduce) a variable name because 
/*side note: we are RETURNING to the function's (items.reduce) PARAMETER, you can't just 
console.log getTotalPrice and expect it to give you items.reduce's parameter  */
//once you do that, RETURN the TotalPrice variable name outside the if else function.
//leave getTotalPrice empty because it's being given an 'unknown' product


function getTotalPrice () {
	var TotalPrice = items.reduce(function (a, b){	
		if(typeof a === "number"){
			return a + b.price;
		}else {
			return (a.price + b.price);
		}
	});
	return "The average price is "+ TotalPrice;
}

getTotalPrice();





////////////////////////////////////////

/*2.Show me how to get an array of items that cost between $14.00 and $18.00 USD*/

//make function called betweenPrice
//use filter method with the parameter price because you want to gt inside the object's key (price)
//make if else statement
//if the item is greater than 14 && 18 return true, if not return false
//make a new array with those who fit the 14 < 18 category with  map method outside of if else statement






function betweenPrice (){

	var betweenPrice = items.filter(function(price) {
		if (items.price > 14 && items.price < 18){
			return true;
		}else {
			return false;
		}	
	})

		items.map(function(item){
			return items.title;
		})
return betweenPrice;
}


betweenPrice(items);

/* shows empty array in console */

/////////////////////////////////////////////////////

/*3.Which item has a "GBP" currency code?
Display it's name and price.
1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18*/

//make function called itemsCurrency
//go threw each object and filter 'GBP'
//make an other function that'll get price
//add both price and new array together and return it to thre betweenPrice function



var itemsCurrency = items.forEach (function (items){
		if (items.currency === 'GBP'){
			return; 
		}else{
			return false;
		}
});




///////////////////////////////////////////////////////////////////

/*4.Display all the items made out of wood*/
//make a function called test wood
// get inside aray and filter out all of materials
//make for each loop that'll go through each value in array
//make items.materials equals wood return wood 

var testWood = items.filter(function(){
	var wood
		if (false){
			return false;
		}else{

		for(var i=0; i < materials.length; i++ )
		 (items.materials === 'wood')
				return true;
		}

});
testWood();

///////////////////////////////////////////////////////////////////

//5.Which items are made of eight or more materials?
// Display the name, number of items and the items it is made of.    
//make function that'll run threw the each array and if true truns true

var testMaterial = items.forEach(function(test){

	for(var i=0; i<materials.length; i++)

		if(materials < 8 ){
		return true;}

		else{
			return false;
		}
		
	});
console.log(testMaterial);

//////////////////////////////////////////////////////////////////////

//6.How many items were made by their sellers?  

//want to filter out item's who_made 
//go to key and check who_is is made by 
//if who_made === i_did return true
//if false it'll filter
//if true return item.reduce number 

var itemSell = items.filter(item){
	var is 
}

















