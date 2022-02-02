function runProgram(input) {
 var newInput=input.trim().split("\n");
 var test= +newInput[0];
 console.log(test);
 for(var i=1;i<newInput.length;i+=2){
     var len= +newInput[i];
     console.log(len);
     var arr=newInput[i+1].trim().split(" ").map(Number);
     console.log(arr);
 }
}
if (process.env.USERNAME === "Ravi") {
    runProgram(` 2
    5
    1 2 3 4 5
    4
    1 2 3 4 `);
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