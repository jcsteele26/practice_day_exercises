function sandwichCalculator(slicesOfBread, slicesOfCheese) {
    var sandwich = Math.floor(slicesOfBread / 2);
    if ((slicesOfCheese == 0) || (slicesOfBread < 2)) {
        console.log("Sorry, no sandwich for you");
        
    } else if (slicesOfCheese <= sandwich) {
        console.log("You can make " + slicesOfCheese + " sandwiches");
        
    } else {
        console.log("You can make " + sandwich + " sandwiches");
    }
    //console.log(sandwich);
    //return sandwich;

}
sandwichCalculator(12, 6);