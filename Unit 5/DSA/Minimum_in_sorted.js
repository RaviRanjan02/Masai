function min_in_sort(arr){
    let start=0;
    let end=arr.length-1;
    let ans=arr[0];
    while(start<=end){
        let mid=start+Math.floor((end-start)/2);
        if(arr[mid]<ans){
            ans=arr[mid]
            end=mid-1
        }else{
            start=mid+1;
        }
    }
    return ans;
}







function runProgram(input){
  var newinput=input.trim().split("\n");
  var arr=newinput[1].trim().split(" ").map(Number);
 console.log(min_in_sort(arr)); 
    
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`10
  4 6 7 9 10 -1 0 1 2 3`);
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