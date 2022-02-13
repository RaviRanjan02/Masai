var stack=[];
function runProgram(input){
   var newInput=input.trim().split("\n");
//    console.log(newInput);
   for(var i=1;i<newInput.length;i++){
       var res=(newInput[i].trim().split(" ").map(Number));
    //    console.log(res);
       if(res[0]==1){
           stack.push(res[1]);
       }
       if(res[0]==2){
           stack.pop()
       }
       if(res[0]==3){
           if(stack.length==0){
               console.log("Empty!");
           }
           else {
               console.log(stack[stack.length-1]);
           }
      }
  }
    
}
if (process.env.USERNAME === "Ravi") {
  runProgram(`6
  1 15
  1 20
  2
  3
  2
  3`);
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