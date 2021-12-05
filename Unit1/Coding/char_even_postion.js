// You are given a string whose size is stored in a variable with the name N, stored in a variable with the name str

// You have to print all the characters in the string, which are present at even indexes

// For example, consider the string stored in str = "nrupul", and the value stored in N = 6, then the output will be

// n
// u
// u

// The characters stored at odd positions aren - index 0,u - index 2,l - index 4, hence they are printed, each character on a new line
// Note : The indexing in the string starts from 0

var N=6;
var str="nrupul";
for(var i=0;i<N;i++){
    if(i%2==0){
        console.log(str[i]);
    }
}
