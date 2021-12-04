// Create a function to check if a number is Prime or Not

function isPrime(num)
{

var count=0;
for(var i=0;i<=num;i++){
    if(num%i==0){
        count++;
    }
}
if(count==2){
    return true;
}
else{
    return false;
}
}

var results=isPrime(5);
console.log(results);