// Use the same function to print Non-Primes from 2 to a given limit
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

var limit=100;
for(var i=2;i<=limit;i++){
    var results=isPrime(i);
    if(results==false){
        console.log(i,"is non prime")
    }
}
