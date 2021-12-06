// You are given an array arr of N integers.

// You need to print Odd, 
// if the sum of all odd numbers present in the array is greater 
// than sum of all the even numbers present in the array, or else print Even
var arr=[1,2,3,4,5,6,7,8,9,10];
var even_sum=0;
var odd_sum=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            even_sum+=arr[i]
        }
        else{
            odd_sum+=arr[i];
        }
    }
    if(even_sum>=odd_sum){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }