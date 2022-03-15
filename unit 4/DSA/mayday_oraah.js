function MayDay(arr){
    var mike=1;
    for(var i=0;i<arr.length;i++){
        if(arr[i]==mike){
            console.log("MayDay!");
            break;
        }
        else{
            console.log("Oorah!");
            break;
        }
    }
}








function runProgram(input){
    var newInput=input.trim().split("\n");
    for(var i=1;i<newInput.length;i+=2){
        var len=newInput[i].trim().split(" ").map(Number);
        // console.log(len);
        var arr=newInput[i+1].trim().split(" ").map(Number);
        // console.log(arr);
        MayDay(arr);
    }
    
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`2
  5
  1 2 3 4 5
  5
  2 8 6 4 10`);
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