function runProgram(input) {
    var newInput=input.trim().split("\n");
    var test= +newInput[0];
    // console.log(test);
    var arr1=[]
    for(var i=1;i<newInput.length;i++){
        arr1.push(newInput[i].trim().split(" ").map(Number));
        
    }
    console.log(arr1);
}
   if (process.env.USERNAME === "Ravi") {
       runProgram(` 3 
       1 2 3
       4 5 6
       7 8 9 `);
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