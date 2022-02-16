// You are given an arr which has N integers.

// Write a program to print the ceil of average of integers present in the array.

var arr=[2,5,0,9];
var sum=0;
for(var i=0;i<arr.length;i++){
    sum=sum+arr[i];
}
var avg =sum/arr.length;
console.log(avg);