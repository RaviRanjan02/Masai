function uni(str){
    console.log(str);
    let res={};
    for(let i=0;i<str.length;i++){
        if(res[str[i]]===undefined){
            res[str[i]]=1;
        }
        else{
            res[str[i]]+=1;
        }
    }
    console.log(res)

  for(key in res){
    //   console.log(res[key]);
      if(res[key]<=1){
         console.log("Unique")
         break
      }
      else{
          console.log("No");
          break
      }

  }
   
}




function runProgram(input){
  var str=input.trim().split("").sort()
//    console.log(str); 
  uni(str)
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`masai`);
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