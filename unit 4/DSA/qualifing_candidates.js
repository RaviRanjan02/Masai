function candidates(arr,len,target){
   var rank=[];
   var cand=0;
   var ranking=1;
   for(var i=0;i<arr.length;i++){
       rank.push(ranking);
       var ans =1;
       while(arr[i]==arr[i+1]){
           rank.push(ranking);
           i++;
           ans++;
       }
       ranking=ranking+ans;
   }
   for(var j=0;j<rank.length;j++){
       if(rank[j]<=target){
           cand++;
       }
   }
   return cand;
}








function runProgram(input){
    var newInput=input.trim().split("\n");
    // console.log(newInput);
    var test= newInput[1].trim().split(" ").map(Number);
    // console.log(test);
    var len = +test[0];
    // console.log(len);
    var target= +test[1];
    // console.log(target);
    var arr=newInput[2].trim().split(" ").map(Number).sort((a,b)=>b-a);
    // console.log(arr);
  console.log(candidates(arr,len,target));
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`1
  5 3
  2 2 2 2 1`);
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