function search_sort(len,k,arr){
    let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (arr[mid] == k) {
          return mid;
      }
      else if (arr[low] < arr[mid]) {
         
          if (k >= arr[low] && k < arr[mid]) high = mid - 1;
          else low = mid + 1;
      }
       else {
         
          if (k > arr[mid] && k <= arr[high]) low = mid + 1;
          else high = mid - 1;
      }
  }

  return -1;
}

function runProgram(input){
   var newInput=input.trim().split("\n");
   var test=newInput[0].trim().split(" ").map(Number);
   var len=+test[0];
   var k=+test[1];
   var arr=newInput[1].trim().split(" ").map(Number);
//    console.log(len,k,arr); 
 console.log(search_sort(len,k,arr));
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`5 1
  3 4 5 1 2`);
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