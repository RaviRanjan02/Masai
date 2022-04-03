function checksub(arr,k){
    var res;
    var ans=0
    for(var i=0;i+k<=arr.length;i++){
        var flag=true;
        var set =newSet()
        res=arr.slice(i,i+k)
        for(var j=0;j<k;j++){
            if(set.has(res[j])){
                flag=false;
                break
            }
            set.add(res[j])
        }
        if(flag){
            ans++
        }
    }
    return ans
    }
    
    







function runProgram(input){
  var newInput=input.trim().split("\n") 
//   console.log(newInput);
  
      var [len,k]=newInput[0].trim().split(" ").map(Number);
      var str=newInput[1].trim().split(" ");
    //   console.log(len,k,str);
      console.log(checksub(str,k));
  
    
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`4 2
  abcc`);
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