function lowerBound(arr,len,k){
let low=0;
let high=len-1;
let ans=-1;
while(low<=high){
    let mid=low+Math.floor((high-low)/2);
    if(arr[mid]===k){
        ans=mid;
        high=mid-1;
    }
    else if(arr[mid]>k){
        high=mid-1;
    }else{
        low=mid+1
    }
}
return ans;
}

function runProgram(input){
    var newinput=input.trim().split("\n");
    // console.log(newinput);
    var test=newinput[0].trim().split(" ").map(Number);
    var len=+test[0];
    var k=+test[1];
    var arr=newinput[1].trim().split(" ").map(Number)
    // console.log(len,k,arr);
   console.log(lowerBound(arr,len,k));
    
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`5 2
  1 1 2 2 5`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}