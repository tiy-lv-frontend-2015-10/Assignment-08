$(document).ready(function() {
  $("#span1").html('The average price is ' + averagePrice);
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

newArr.forEach(function(obj) {
  $("#span2").append(obj.title + " </br>");
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
    price: obj.price
  }
});

gbpNewArr.forEach(function(obj) {
  $("#span3").append(obj.title).append(obj.price);
});

// --- end of answer 3

// this is for answer 4

var newArr = items.filter(function(item) {
  var isWood=false;
  item.materials.forEach(function(material){
    if(material === "wood") {
      isWood = true;
    }

   });
  return isWood;
 });

newArr.forEach(function(obj){
  $("#span4").append(obj.title +  "</br>");
})

// this is for answer 5

var materialLength = items.filter(function(obj) {
  return {
    title: obj.title,
    materials: obj.materials
  }
});

 var moreFilter = items.filter (function(obj) {
    if (obj.materials.length >= 8) {
    return obj.materials
  }
});

var materialNumbers = moreFilter.map(function(obj) {
  return {
    'title': obj.title,
    'material numbers': obj.materials.length,
    'materials': obj.materials
  }
});

materialNumbers.forEach(function(obj) {
$("#span5").append(obj.title).append("</br>").append("</br>" + "<li>" + obj.materials + "." + "</li>" + "</br>" );
});

// end of answer 5

// this is for answer 6

var whoMade = items.filter(function(obj) {
  if(obj.who_made === "i_did") {
    return true;
  } else {
    return false;
  }
});

var whoMadeThis = whoMade.filter(function(obj) {
  return (whoMade.length);
});

$("#span6").append(whoMade.length + ' were made by there sellers.');

// end of 6












