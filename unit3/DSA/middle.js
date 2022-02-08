function Middle(num){
    for( var i=0;i<num.length-1;i++){
        for(var j=0;j<num.length-i-1;j++){
            if(num[j]>num[j+1]){
                let temp=num[j]
                num[j]=num[j+1]
                num[j+1]=temp
            }
        }
    }
    // console.log(num);
    var s=0;
    var end=num.length-1;

    let middle =s+Math.floor((end-s)/2)
    console.log(num[middle]);
}





function runProgram(input){
    // console.log(input);
    var num=input.trim().split(" ").map(Number);
    console.log(num);
    // var a = num[0];
    // var b= num[2];
    // var c=num[1]
    // console.log(a,b,c);
    Middle(num);
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`4 8 6`);
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