// Write a function is Odd which returns a boolean value based the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit (included)

var a =8;
function odd(a) {
    for(var i=0;i<=a;i++){
        if(i%2!=0){
            console.log(i);
        }
        else{
            return false;
        }
    }
    return true;
}
console.log(odd(a));
