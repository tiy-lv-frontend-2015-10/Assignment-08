$(document).ready(function() {

function getTotalPrice() {
	var totalPrice = items.reduce(function(a, b) {
		if(typeof a === "number") {
			return a + b.price;
		} else {
			return a.price + b.price;
	}
	return totalPrice;
});