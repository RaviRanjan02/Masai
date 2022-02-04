function factorial(num){
// console.log(num);
if(num <=1){
    return 1
}
return num*factorial(num-1);
}






function runProgram(input){
    var newInput=input.trim().split(" ");
    // console.log(newInput);
    var num= +newInput[0];
    // console.log(num);
    console.log(factorial(num))
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
