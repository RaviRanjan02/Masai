function Equilibrium(len,arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let result = 0
    let flag = true
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
        if ((sum - result - arr[i + 1]) == result) {
            console.log(i + 2)
            flag = false
            break
        }
    }
    if (flag) {
        console.log(-1)
    }
}






function runProgram(input){
  var newInput=input.trim().split("\n");
  console.log(newInput);
  var len=newInput[0].trim().split(" ").map(Number)
  var arr=newInput[1].trim().split(" ").map(Number)
  Equilibrium(len,arr)  
    
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`5
  3 3 5 5 1`);
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