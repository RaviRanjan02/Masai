function sumOfDigits(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum);
}
function runProgram(input) {
   var newInput=input.trim().split("\n");
//    console.log(newInput);
   for(var i=1;i<newInput.length;i+=2){
       var len= +newInput[i]
       console.log(len);
       var arr=newInput[i+1].trim().split("").map(Number)
       console.log(arr);
       sumOfDigits(arr)
   }


  
}
if (process.env.USERNAME === "Ravi") {
   runProgram(`2
   5
   12 14 16 17 29
   6
   1 2 3 4 5 51
   `);
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