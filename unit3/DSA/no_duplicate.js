function KeepDistincts(arr){
   var res={};
   for(var i=0;i<arr.length;i++){
         if(res[arr[i]]===undefined){
             res[arr[i]]=1
         }
         else{
             res[arr[i]]+=1
         }
   }
//    console.log(res);
   var ans=[];
   for(key in res){
    //    console.log(res[key]);
       ans.push(key);
   }
   console.log(ans.join(""));
}





function runProgram(input){
//    console.log(input);
   var arr=input.trim().split("");
//    console.log(arr);
   KeepDistincts(arr);
}

if (process.env.USERNAME === "Ravi") {
  runProgram(`iloveprogramming`);
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