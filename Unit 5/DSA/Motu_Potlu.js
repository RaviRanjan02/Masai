function runProgram(input){
    var no = +input.trim()

    let LSteps = no % 5

    let FSteps = (no - LSteps) / 5

    if (LSteps == 0) {
        console.log(FSteps)
    }else{
        console.log(FSteps + 1)
    } 
    
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`26`);
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