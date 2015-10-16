$(document).ready(function(){
		var totalPrice = items.reduce(function(a, b){
			if(typeof a === "number"){
				return a + b.price;
			}else{
				return a.price + b.price;
			}
		});
		
		var avgPrice = totalPrice / items.length;
		console.log(avgPrice.toFixed(2));
		$("#answer1").html(avgPrice.toFixed(2));


		var betweenItems = items.filter(function(priceObj){
			if (priceObj.price > 14 && priceObj.price < 18) {
					return true;
				}else{
					return false;
					}
		}).map(function(item){
			return item.title;
		});
		console.log(betweenItems);
		$("#answer2").html(betweenItems);

		var gbp = items.filter(function(currency_codeObj){
			if (currency_codeObj.currency_code === "GBP") {
					return true;}
		}).map(function(item){
			return item.title;
		})
		console.log(gbp)
		$("#answer3").html(gbp);


		


		/*var madeWood =items.filter(item){
			var isWood = false;
				item.materials.forEach(function(material){
					if (material === "wood") {
						isWood = true;
					}
				});



			return isWood;
				}
		}





*/
		var madeEight = items.filter(function(item){
			if (item.materials.length >= 8) {
					return true;
				}else{
					return false;
				}
			}).map(function(item){
				return {title: item.title,
						materials: item.materials
					}
			})
				console.log(madeEight);
				$("#answer5").html(madeEight);

		

		var madeBy = items.filter(function(who_madeObj){
			if (who_madeObj.who_made === "i_did") {
					return true;}
		}).map(function(item){
			return item;
		})
		console.log(madeBy.length);
		$("#answer6").html(madeBy.length);
});