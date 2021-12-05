// You are given a string, whose size is stored in a variable with the name N

// The string is stored in a variable with the name str

// You have to print true, if the string contains at least one vowel, otherwise print false

// For example, consider the value stored in N = 6, and the value stored in str = "nrupul", then the output will betrue, since the string contains the vowel u twice

// Note : The string only contains lowercase English alphabets

// Note : The vowels in the English Alphabet are considered the following - a,e,i,o,u

var N=6;
var str="nrupurl";
var count=0;
for(var i=0;i<=N;i++){
    if(str[i]=="a"||str[i]=="e"||str[i]=="o"||str[i]=="i"||str[i]=="u"){
        // console.log("true")
        count++;
    }
}
if(count>0){
    console.log("true")
}
else{
    console.log("false")
}
