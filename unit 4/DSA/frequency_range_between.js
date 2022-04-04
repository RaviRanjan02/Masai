function fre(arr,left,right,value){
  // console.log(arr);
  var res=0;
  for(var i=left-1;i<right;i++){
    if(arr[i]==value){
      res++;
      
    }
  }
  return res
}








function runProgram(input){
  var newInput=input.trim().split("\n");
  var test=newInput[0].trim().split(" ").map(Number);
  var len= +test[0];
  var query=+test[1];
  
  var arr=newInput[1].trim().split(" ").map(Number);
  // console.log(arr);
  // var [left,right,value]=newInput[2].trim().split(" ").map(Number);
  for(var i=2;i<newInput.length;i++){
     var [left,right,value]=newInput[i].trim().split(" ").map(Number);
    //  console.log(left,right,value);
    console.log(fre(arr,left,right,value)); 
   } 

  //  console.log(fre(len,query,arr,left,right,value));
}

if (process.env.USERNAME === "Ravi") {
  runProgram(`6 2
  1 5 3 2 3 2 
  3 6 2
  4 4 2
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