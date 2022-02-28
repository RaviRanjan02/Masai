// Given an array,(arr) which has (N) integers.

// You need to print the smallest and largest element present in the array each on new lines.
var max=0;
var min=0;                                                      
var arr=[-2,0,8,4];
for(var i=0;i<arr.length;i++){
    if(arr.length==1){
        max=arr[i];
        min=arr[i];
    }
    else{
        if(arr[i]<min){
            min=arr[i];
        }
        if(arr[i]>max){
            max=arr[i];
        }
    }

}
console.log(min);
console.log(max);
