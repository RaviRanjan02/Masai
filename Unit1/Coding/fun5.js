// Write a function to replace spaces in a given string with -
var str="Masai School"
function isModifiy(str){
var output="";
for(var i=0;i<str.length;i++){
    if(str[i]==" "){
        output=output+"-"
    }
    else{
        output=output+str[i];
    }
}
return output;
}

var result=isModifiy(str);
console.log(result);