function increaseByK(arr,k){
    var res=[];
  for(var i=0;i<arr.length;i++){
      res.push(arr[i]+k)
  }
  console.log(res.join(" "));
}

function runProgram(input) {
    var newInput=input.trim().split("\n");
    var test= +newInput[0];
    // console.log(test);
    for(var i=1;i<newInput.length;i+=2){
        var [len,k] = newInput[i].trim().split(" ").map(Number)
        // console.log(len,k);
        var arr1=(newInput[i+1].trim().split(" ").map(Number));
        // arr2.push(newInput[i+4].trim().split(" ").map(Number));
        
        // console.log(arr1);
        increaseByK(arr1,k)
    }
}
   if (process.env.USERNAME === "Ravi") {
       runProgram(` 2
       3 2
       1 2 3
       3 1
       1 2 3 `);
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