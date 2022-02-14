function ways(n){
   if(n==0){
       return 1
   }
   else if(n<0){
       return 0
       
   }
   else{
       return ways(n-4)+ways(n-8)
   }
}





function runProgram(input){
    // console.log(input);
    var newInput=input.trim().split("\n");
    // console.log(newInput);
    for(var i=1;i<newInput.length;i++){
        var n= +newInput[i]
        // console.log(n);
       console.log(ways(n));
    }
    
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`1 
  12`);
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