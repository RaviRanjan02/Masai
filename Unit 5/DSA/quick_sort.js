function quickSort(arr, low, high) {
  if (low < high) {
    let pivot = partition(arr, low, high);

    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);

}
return arr;
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
        i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  i++;
  let temp = arr[i];
  arr[i] = arr[high];
  arr[high] = temp;
  return i;
}

function runProgram(input){
    var newInput=input.trim().split("\n");
    let arr=newInput[1].trim().split(" ").map(Number);
    var start=0;
    var n=arr.length-1;
  console.log(quickSort(arr,start,n-1));
}


if (process.env.USERNAME === "Ravi") {
  runProgram(`5
  5 6 2 1 3`);
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