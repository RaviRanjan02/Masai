function higherBound(n, k, arr) {
  var low = 0;
  var high=n;
  var ans =-1;
  while (low<=high) {
    var mid =low+Math.floor((high-low)/2);
    if (arr[mid]<=k){
      low=mid+1;
    }
    else {
        ans=mid
        high=mid-1
    }
    }  
    return ans
 
  
};

function runProgram(input){
  var newInput=input.trim().split("\n");
  // console.log(newInput);
  var num=newInput[0].trim().split(" ").map(Number)
  // console.log(num);
  var arr=newInput[1].trim().split(" ").map(Number)
  // console.log(arr);
  var n= +num[0];
  var k= +num[1];
  console.log(higherBound(n,k,arr));
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`10 3
  0 2 4 4 5 5 7 7 9 10`);
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