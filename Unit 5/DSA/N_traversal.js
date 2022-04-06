function nTraversal(matrix) {
  var res=[];
var n=matrix.length;
for(var i=n-1;i>0;i--){
    res.push(matrix[i][0]);
}
for(var i=0;i<n;i++){
    res.push(matrix[i][i]);
}
for(var i=n-2;i>=0;i--){
    res.push(matrix[i][n-1]);
}

console.log(res.join(" "));
}

function runProgram(input){
   var newInput=input.trim().split("\n");
   for(var i=2;i<newInput.length;i++){
     var matrix=newInput[i].trim().split(" ").map(Number);
     console.log(matrix);
     nTraversal(matrix);
   } 
    
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`1
  3
  1 2 3
  4 5 6
  7 8 9`);
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