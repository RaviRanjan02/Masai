// You are given an array, stored in a variable with the size arr

// The size of the array is stored in a variable with the name n

// You have to traverse the array, and print only the odd elements in the array.

// Print each number on a new line

// For example, consider the array asarr = [1 2 3 4 5], and the value stored inn = 5

// Then, the required output will be

// 1
// 3
// 5

// The above are the odd numbers in the given array

var arr=[1,2,3,4,5];
var sum=0;
var count=0;
for(var i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        console.log(arr[i]);
        count++;
        sum=sum+arr[i];
    }
}
console.log(count,"is count of odd");
console.log(sum,"is sum odd");