$(document).ready(function() {






});

// this is for answer one

var totalPrice = items.reduce(function(a, b) {


  console.log(typeof a)
  if (typeof a === "number") {
    return a + b.price;
    } else {
      return a.price + b.price;
    }
});

var averagePrice = (totalPrice/items.length).toFixed(2);
console.log(averagePrice);

// --- end of answer one


// this is for answer two

var priceArr = items.filter(function(btwnObj) {
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

// --- end of answer two


// this is for answer 3

var gbp = items.filter(function(gbpObj) {
  if (gbpObj.currency_code  === "GBP") {
    return true;
  } else {
    return false;
  }
});

var gbpNewArr = gbp.map(function(obj) {
  return {
    title: obj.title,
    price: obj.currency_code
  }
});

// --- end of answer 3


// this is for answer 4




