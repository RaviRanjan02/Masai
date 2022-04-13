function Sinchan(arr,k,len){
    
    for(var i=0;i<len;i++){
        if(arr[i]==k){
            return i
        }
        else if(arr[i]>k){
            return i
        }
    }
    return len
}

function runProgram(input){
   var newInput=input.trim().split("\n");
   var len=newInput[0].trim().split(" ").map(Number);
   var arr=newInput[1].trim().split(" ").map(Number);
   var k=newInput[2].trim().split(" ").map(Number);
//    console.log(arr,k);
  console.log(Sinchan(arr,k,len));
    
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`4
  1 3 5 6
  5 `);
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