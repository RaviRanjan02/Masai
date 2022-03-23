function apples(len,W,arr){
var sum=0;
for(var i=0;i<arr.length;i++){
  sum= sum+arr[i];
  if(sum>W){
   console.log(i);
  }
}
}

function runProgram(input){
    var newInput=input.trim().split("\n");
    // console.log(newInput);
    var [len,W]=newInput[0].trim().split(" ").map(Number);
    var arr=newInput[1].trim().split(" ").map(Number);
    // console.log(len,W,arr);
    apples(len,W,arr);
    
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`4 20
  3 10 4 4 `);
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