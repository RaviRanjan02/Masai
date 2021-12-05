// You are given a number stored in a variable with the name N

// You have to print all the numbers in the range from 1 to N*N, such that there are exactly Nnumbers on each line

// For example, if the value stored in N = 3, then all the numbers in the range, from [1,9] need to be printed, such that there are 3 numbers on each line. Therefore, the required output is

// 1 2 3
// 4 5 6
// 7 8 9

var N=4;
var count=1;
for(var i=1;i<=N;i++){
    var bag="";
    for(var j=1;j<=(N);j++){
        // console.log(j);
        bag=bag+count+" ";
        count++;
        
    }
    console.log(bag);
}

