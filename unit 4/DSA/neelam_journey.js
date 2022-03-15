function neelam(arr){
var cur = arr[0];
var total =0;
var curIndex=0;
for(var i=0;i<arr.length;i++){
    if(arr[i]<cur){
        total += cur*(i-curIndex);
        cur =arr[i];
        curIndex=i;
    }
    if(i==arr.length-1){
        total +=cur*(arr.length-curIndex)
    }
}
return total;
}

function runProgram(input){
    var newInput=input.trim().split("\n");
    var arr=newInput[1].trim().split(" ").map(Number);
    // console.log(arr);
   console.log(neelam(arr));
    
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`5
  4 7 8 3 4`);
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