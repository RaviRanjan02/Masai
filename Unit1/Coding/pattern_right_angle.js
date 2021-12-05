// You are given a number, stored in a variable with the nameN

// Print the pattern as shown below.

// If the value stored inN = 4, then the pattern required will be

// *
// **
// ***
// ****

var num=4;
for(var i=1;i<=num;i++){
    var bag="";
    for(var j=1;j<=i;j++){
    // console.log("*");
    bag+="*"+" "
    }
    console.log(bag);
}
