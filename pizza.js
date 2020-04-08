var sentence= " ";

function getPizza() {
    var toppings = ["cheese", "pepperoni", "mushrooms", "beef"];
    
    //console.log("A delicious pizza with ");
    for(var i= 0; i < toppings.length; i++) {
        sentence= sentence + toppings[i] + " and ";
      //  if (i= toppings.length - 1) {
       //     return sentence;
      //  } else {
      //      sentence= sentence + toppings[i] + " and ";
      //  }
    }
   return sentence;

}
getPizza();
console.log("A delicious pizza with " + sentence);



