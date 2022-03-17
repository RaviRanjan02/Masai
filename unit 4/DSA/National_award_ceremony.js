function swap(arr,i,j){
    var temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp
}
function national(arr){
    var left =0;
    var right=arr.length-1;
    var i=0;
    while(i<=right){
        if(arr[i]==0){
            swap(arr,i,left);
            left++;
            i++;
        }
        else if(arr[i]==2){
            swap(arr,i,right);
            right--;
        }
        else{
            i++;
        }
    }
return arr.join(" ")
}


function runProgram(input){
   var newInput=input.trim().split("\n");
//    console.log(newInput);
   for(var i=1;i<newInput.length;i+=2){
       var len=newInput[i].trim().split(" ").map(Number)
    //    console.log(len);
       var arr=newInput[i+1].trim().split(" ").map(Number);
    //    console.log(arr);
     console.log(national(arr));
   }
    
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`3
  1
  2
  3
  2 0 1
  4
  2 0 2 1`);
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