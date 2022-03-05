function Peak(arr){
    let start=0;
    let end=arr.length-1;
    let res=-1
    while(start<=end){
        var mid=start+(parseInt(end-start)/2)
        if(arr[mid]>res){
           res=arr[mid]
           end =mid-1
        }
        else{
            start=mid+1
        }
        
    }
    return res
}







function runProgram(input){
    var newInput=input.trim().split("\n");
    // console.log(newInput);
    for (var i=1;i<newInput.length;i+=2){
        var len= newInput[i].trim().split(" ").map(Number);
        // console.log(len);
        var arr= newInput[i+1].trim().split(" ").map(Number);;
        // console.log(arr);
       console.log(Peak(arr));
    }
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`2
  3
  10 20 11
  5
  1 3 6 5 4`);
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