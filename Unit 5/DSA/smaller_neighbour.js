
function Smaller(arr){
    let stack = []
    let res = []
    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
            stack.pop()
        }
        if (stack.length == 0) {
            res.push(-1)
        } else {
            res.push(stack[stack.length - 1])
        }
        stack.push(arr[i])
    }

    console.log(res.join(" "))
}







function runProgram(input){
  var newInput=input.trim().split("\n");
  var arr=newInput[1].trim().split(" ").map(Number);
//   console.log(arr);
 Smaller(arr);
    
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`8
39 27 11 4 24 32 32 1`);
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