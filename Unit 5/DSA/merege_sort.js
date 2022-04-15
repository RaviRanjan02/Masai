function divide(arr,start,end){
  if(start>=end){
    return;
  }
  let mid = start+Math.floor((end-start)/2);
  divide(arr,start,mid);
  divide(arr,mid+1,end);

  mergeSort(arr,start,mid,end);
  return arr;

}

function mergeSort(arr,start,mid,end){
    let merge=[];

    let i=start;
    let j=mid+1;

    let k=0;

    while (i <= mid && j <= end) {
      if (arr[i] <= arr[j]) {
        merge[k] = arr[i];
        i++;
        k++;
      } else {
        merge[k] = arr[j];
        j++;
        k++;
      }
    }
    while (i <= mid) {
      merge[k] = arr[i];
      k++;
      i++;
    }
    while (j <= end) {
      merge[k] = arr[j];
      j++;
      k++;
    }
    for (m = 0, n = start; m < merge.length; m++, n++) {
      arr[n] = merge[m];
    }
}

function runProgram(input){
    var newInput=input.trim().split("\n");
    // console.log(newInput);
    var arr=newInput[1].trim().split(" ").map(Number);
    var n=arr.length;
    var start=0;
   console.log(divide(arr,start,n-1));
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`7
  5 2 4 8 9 2 1 `);
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