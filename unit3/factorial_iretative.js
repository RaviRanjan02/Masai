function factorial(num){
var fact=1;
for(var i=1;i<=num;i++){
   fact=fact*i;
}
console.log(fact);
}

function runProgram(input){
    var newInput=input.trim().split(" ").map(Number);
    // console.log(newInput);
    var num= newInput[0];
    // console.log(num);
    factorial(num);
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`5`);
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