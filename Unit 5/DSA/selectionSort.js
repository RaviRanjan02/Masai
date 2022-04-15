function select(arr){
  let n=arr.length;
  for(let i=0;i<n-1;i++){
    let min=i;
    for(let j=i+1;j<n;j++){
      if(arr[j]<arr[min]){
        min=j;
      }
    }
    let temp=arr[min]
    arr[min]=arr[i]
    arr[i]=temp
  }
  return arr;
}

function runProgram(input){
  var newInput=input.trim().split("\n");
  let arr=newInput[1].trim().split(" ").map(Number)
 console.log(select(arr)); ;  
    
}

if (process.env.USERNAME === "Ravi") {
  runProgram(`9
  8 4 6 7 1 2 3 9 5`);
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