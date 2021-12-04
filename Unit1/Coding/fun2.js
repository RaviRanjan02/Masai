// Use the above function to print the Primes from 2 to a given limit
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
for(var i=0;i<=limit;i++){
    var results=isPrime(i);
    if(results==true){
        console.log(i,"is prime")
    }
}
