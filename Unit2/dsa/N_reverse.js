 function ReverseNTraversal(array){
    //  console.log(array);
    var res=[];
    var n=array.length;
    console.log(n);
    for(var i=0;i<n;i++){
        res.push(array[i][0]);
    }
    console.log(res);
    for(var i=1;i<n-1;i++){
        res.push(array[i][i])
    }
    console.log(res);
    for(var i=0;i<n;i++){
        res.push(array[0][n-1-i])
    }
    console.log(res);
     
}
function runProgram(input) {
    

   var newInput=input.trim().split("\n");
//    console.log(newInput);
var len=newInput[1];
// console.log(len);
var arr=[]
   for(var i=2;i<newInput.length;i++){
       arr.push(newInput[i].trim().split(" ").map(Number))
    }
    console.log(arr);
    ReverseNTraversal(arr)
   
}
if (process.env.USERNAME === "Ravi") {
    runProgram(`1
    3
    1 2 3
    4 5 6
    7 8 9`);
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