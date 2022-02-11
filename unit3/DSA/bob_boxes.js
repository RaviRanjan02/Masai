function ways(n){
    if(n==0){
        return 1
    }
    else if(n<0){
        return 0
        
    }
    else{
        return ways(n-1)+ways(n-3)+ways(n-5)
    }
 }
 
 
 
 
 
 function runProgram(input){
     // console.log(input);
     var newInput=input.trim().split(" ");
     // console.log(newInput);
     for(var i=0;i<newInput.length;i++){
         var n= +newInput[i]
         // console.log(n);
        console.log(ways(n));
     }
     
 }
 
 
  
 
 if (process.env.USERNAME === "Ravi") {
   runProgram(`7`);
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