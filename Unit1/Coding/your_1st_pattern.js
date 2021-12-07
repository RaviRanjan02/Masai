// You are given a number stored in a variable with the name n

// You have to printnlines, and on each line you have to printnstars

// For example, consider the value stored in n = 4. Then, the required output will be

// * * * *
// * * * *
// * * * *
// * * * *

var num=4;
for(var i=1;i<=num;i++){
    var bag="";
    for(var j=1;j<=num;j++){
        bag=bag+"*"+" ";
    }
    console.log(bag);
}

