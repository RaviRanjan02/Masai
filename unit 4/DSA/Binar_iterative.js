function binaryIterative(len,k,arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]==k){
            console.log("1");
            break;
           
        }
    }
    if(arr[i]!=k){
        console.log("-1");
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
    binaryIterative(len,k,arr);
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