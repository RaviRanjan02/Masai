function binaryRecursive(len,k,arr){
    var start=0;
    var end =arr.length-1;
    var ans=-1;
    while(start>end){
        
        if(start>end){
            return -1;
        }
        var mid =start+Math.floor((end-start)/2)
        if(k==arr[i]){
            return mid
        }
        else if(k<arr[i]){
            return (binaryRecursive(arr,start,mid-1,k))
        }
        else{
            return (binaryRecursive(arr,mid+1,end,k))
        }
            
    }
}







function runProgram(input){
    var newInput=input.trim().split("\n");
    // console.log(newInput);
    var len=newInput[0][0].trim().split(" ").map(Number);
    // console.log(len);
    var k=newInput[0][1].trim().split(" ").map(Number);
    // console.log(k);
    var arr=newInput[1].trim().split(" ").map(Number);
    // console.log(arr);
   console.log(binaryRecursive(len,k,arr)); 
    
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`5 0
  2 -2 0 3 4`);
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