function sqaure_root_binary(no){
    var low=0;
    var high=no;
    var res=0;
    while(low<=high){
        var mid=low+parseInt((high-low)/2);
        if(mid*mid<=no){
            res=mid
            low=mid+1
        }
        else if (mid*mid>no)
            {
                high=mid-1
            }
        
    }
    return res
}

function runProgram(input) {
   
    var newInput=input.split("\n")
   for(var i=1;i<newInput.length;i++){
       var number= +newInput[i]
    //    console.log(number);
       console.log(sqaure_root_binary(number));
   }
 
    
 }

 

if (process.env.USERNAME === "Ravi") {
  runProgram(`2
  4
  8`);
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