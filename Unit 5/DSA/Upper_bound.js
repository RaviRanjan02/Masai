function upperBound(arr,len,k){
    var low = 0;
  var high=len;
  var ans = -1;
  while (low<=high) {
    var mid = low+Math.floor((high-low)/2);
    if (arr[mid]<=k){
      low = mid + 1;
    }
    else {
        ans=mid
        high= mid-1
    }
    }  
    return ans
    }
    
    function runProgram(input){
        var newinput=input.trim().split("\n");
        // console.log(newinput);
        var test=newinput[0].trim().split(" ").map(Number);
        var len=+test[0];
        var k=+test[1];
        var arr=newinput[1].trim().split(" ").map(Number)
        // console.log(len,k,arr);
       console.log(upperBound(arr,len,k));
        
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