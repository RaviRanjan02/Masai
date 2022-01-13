function runProgram(input) {
    var newInput=input.trim().split("\n");
    var test= +newInput[0];
    // console.log(test);
    for(var i=1;i<newInput.length;i++){
        
        var str= newInput[i].trim()
        console.log(str);
    }
    
   
   
   
   }
   if (process.env.USERNAME === "Ravi") {
       runProgram(` 2
       aman
       rutwik `);
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