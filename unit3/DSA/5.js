function noofWays(N){
  if(N==0){
    return 1
  }
  else if(N<0){
    return 0
  }
  else{
    return noofWays(N-1)+noofWays(N-2)+noofWays(N-5)
  }
}







function runProgram(input){
    var newInput=input.trim().split("\n");
    // console.log(newInput);
    for(var i=1;i<newInput.length;i++){
      var N=newInput[i]
      // console.log(N);
      console.log(noofWays(N)); 
    }
   
    
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`1
  5`);
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