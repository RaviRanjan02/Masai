// Write a function to check if the char is a small case or not
function isSmallCase(char)
{
var lower ="abcdefghijklmnopqrstuvwxyz";
for(var i=0;i<lower.length;i++){
    if(char==lower[i]){
        return true;
    }
}
return false;
}
var result =isSmallCase("b");
console.log(result);