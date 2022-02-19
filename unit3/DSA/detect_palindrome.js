// // You are given an integer num.

// // You need to print Yes if that integer is a palindrome or else print No.

// // A palindrome is a word, number, phrase, or other sequence of characters that reads the same backward as forward,such as madam or racecar.

var num="121";
var len=num.length;
var is_pal=false;
for(var i=0;i<len/2;i++){
     if(num[i]!==num[len-1-i])
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
