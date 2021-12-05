// You are given a string, whose size is stored in a variable with the name N

// The string is stored in a variable with the name str

// Print Yes, if the string is a palindrome, else print No

// For example, consider the value stored instr = "naman", if we reverse the string, the reversed string will be the same as the original string, hence the string is considered as palindrome, therefore, the output is Yes

// Note : A palindrome is a string which is the same read forwards or backwards

var str="naman";
var is_pal=false;
for(var i=0;i<str.length/2;i++){
       if(str[i]!=str[str.length-1-i])
         {
             is_pal=false;
            break;
         }
         else
         {
             is_pal=true;
             break;
         }
    }
    if(is_pal==true){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
    
