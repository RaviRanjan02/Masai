function power(a,b){
//    console.log(a,b);
   if(b==0){
       return 1
   }
   if(b==1){
       return a
   }
   else{
       return a*power(a,b-1)
   }
}





function runProgram(input){
    console.log(input);
    var num=input.trim().split(" ").map(Number);
    // console.log(num);
    var a = num[0];
    var b= num[1];
    // console.log(a,b);
    console.log(power(a,b))
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`2 4`);
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