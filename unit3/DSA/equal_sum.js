function equalsum(a,b,c,d){
    if((a+b)==(c+d)||(a+c)==(b+d)||(a+d)==(b+c)){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}





function runProgram(input){
   console.log(input);
   var [a,b,c,d]=input.trim().split(" ").map(Number);
   console.log(a,b,c,d)
   equalsum(a,b,c,d)
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`1 8 4 11`);
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