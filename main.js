$(document).ready(function() {

//Show me how to calculate the average price of all items.
// * the average price is $23.63

var avgPrice = items.reduce(function(a,b) {
	if (typeof a === "number") {
		return a + b.price;
	} else {
		return a.price + b.price;
	}
});

console.log($("#s1").html(avgPrice / items));

//Show me how to get an array of items that cost between $14.00 and $18.00 USD.
// *1970s Coors Banquet Glass Beer Pitcher
// *The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift.
// * Hand Painted Colorful Feather Glass

var costBetween = items.filter(function(priceObj) {
	if(priceObj.price <= 18 && priceObj.price >= 14) {
		return priceObj.price;
	}
});





// Which item has a "GBP" currency code? Display its name and price.
// *1970s Schlitz Mal Liquor Glass Beer Pitcher cost 18 pounds.











//Display a list of all items who are made of wood.
// *SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
// *Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
// *Medium Size, Welcome To Our Firepit- Where Friends and Marshmallows get Toasted	At The Same Time-Painted Wood Sign-customed Color is made of wood.
// *Magnetic Wll Mount Bottle Opener Barware Set- Stainless steel or black - Personalized if you like! is made of wood.
// *Engraved Pocket knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 knives is made of wood.







//Which items are made of eight or more materials? Display the name, number of items, and the items it is made of.
// *QTY of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
// *wall mount bottle opener, wedding, man cave, christmas gift, guy gift, christmas gift, fathers day, home bar, beer, bar.
// *The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug has 13 materials.
// *glass, sandblast cabinet, vinyl, beer glass, pint glass, etched pint glass, etched glass, etched beer glass, 16 oz pint, beer gift, etched harry potter glass, the three broomsticks glass, personalized harry potter glass.






//How many items were made by their sellers?
// *18 were made by their sellers




