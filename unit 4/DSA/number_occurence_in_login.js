






function runProgram(input){
    var newInput=input.trim().split("\n");
    console.log(newInput);
    for(var i=1;i<newInput.length;i++){
        var arr=newInput[i].trim().split(" ").map(Number);
        console.log(arr);
    }
    
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`6 3
  2 3 3 3 6 9`);
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