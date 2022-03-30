function binaryRecursive(len,k,arr){
    var low=0;
    var high=arr.length-1;
    var elem=0;
    if(high>=low){
      var mid =low+Math.floor((high-low)/2);
    }
    if(arr[mid]==elem){
      return mid
    }
    if(arr[mid]>elem){
      return binaryRecursive(low,elem,arr,mid-1)
    }
    return binaryRecursive(high,elem,arr,mid+1)
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