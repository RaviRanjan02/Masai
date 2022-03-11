function  lowerBound (n, k, arr) {
  var low = 0;
  var high = n -1;
  var ans = -1;
  while (low <high) {
    mid = low + Math.floor((high - low) / 2);
    if (arr[mid] == k) {
        ans = mid
        high = mid -1;
    }
     else if(arr[mid] >k)
     {
      high = mid -1;
    }
    else {
        low = mid + 1;
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
    console.log(lowerBound(n,k,arr));
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`6 3
  2 3 3 3 6 9`);
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