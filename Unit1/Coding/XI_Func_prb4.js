// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

var arr=[1]

function avg(str) {
    var sum=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]==0){
            return 0;
        }
       else{
           sum=sum+arr[i];
        }
    }
    // console.log(sum);
var avg=(sum/arr.length);
    
    return avg;
}
console.log(avg(arr));
