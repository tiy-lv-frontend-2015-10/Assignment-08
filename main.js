$(document).ready(function() {
    
//1. Show me how to calculate the average price of all items.
    //Steps. .reduceLoop, convert from object, return price, shorten decimels, 
   
    
    var totalPrice = items.reduce(function (a, b) {
         if (typeof a === "number") {
             return a + b.price;
         } else {
             return a.price + b.price;
         }
     });
    
   var avgPrice = totalPrice / items.length;
        console.log(avgPrice.toFixed(2));
        $("#answer1").html("The average price is $" + avgPrice.toFixed(2));
    
    // -----------------------------------------------------------------------------
    //2. Show me how to get an array of items that cost between $14.00 and $18.00 USD.
    //Filter 14-18 from lists.price. 
    
    var betweenItems = items.filter(function(obj) {
        if (obj.price > 14 && obj.price < 18) {
            return true;
        } else {
            return false;
        }
    })
    
    .map(function(item){
        return item.title;
    });
    
    $("#answer2").html(betweenItems);
    
    //-----------------------------------------------------------------------
    //3. Which item has a "GBP" currency code? Display it's name and price. Find GBP and return &pound.
    // 
   var gbp = items.filter(function(obj) {
       if (obj.currency_code === "GBP") {
           return true;
       }
   })
    
   .map(function(item) {
       return item.title;
   })
   
   $("#answer3").html(gbp + "costs £ 18");
        
    //---------------------------------------------------------
    //4. Display a list of all items who are made of wood. Find WOOD from the MATERIALS PROPERTIES.
   var woodItems = items.map(function(item) {
       item.materials.forEach(function(material) {
           if (material === "wood") {
               console.log("wood");
               return true;
           } else {
               return false;
           }
       })
      
   });
       
     woodItems.forEach(function(wood) {
           return woodItems.wood;
         console.log("woodItems");
       });
    
    $("#answer4").html(woodItems);
    
    
    
    
          //   arr.filter(callback[, thisArg])
    //-------------------------------------------------------------------------------------
    //5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of. List the new array out of property-materials > 8.
   var eightOrMore = items.filter(function(obj) {
       if (obj.materials.length >= 8) {
           console.log("8 or more");
           return true;
       }
   });
    
    var list = eightOrMore.map(function(obj) {
        return {
            "title": obj.title,
            "materials": obj.materials,
            "materialLength": obj.materials.length
        }
    });
    
    list.forEach(function(obj) {
        $("#answer5").html (obj.title + obj.materials + obj.materials.length);
        
    });
    

    //-------------------------------------------------------------------------------------
    //6. How many items were made by their sellers? Find/return to html who_made = "i_did"
  var sellerMade = items.map(function(obj) {
      if (obj.who_made === "i_did") {
          console.log("seller made");
          return true;
        }
      });

    sellerMade.filter(function(item) {
          return item.who_made;
    });
    
   $("#answer6").html(sellerMade);


});//CLOSES DOCUMENT READY
