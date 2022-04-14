function bubble(arr){
  for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        let temp = arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp
      }
    }
   
  }
  return arr
}

function runProgram(input){
    var newInput=input.trim().split("\n");
    var arr=newInput[1].trim().split(" ").map(Number);
    // console.log(arr);
   console.log( bubble(arr));
    
}

if (process.env.USERNAME === "Ravi") {
  runProgram(`6
  1 6 9 5 6 3`);
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