function Max(arr,len,k){
    // console.log(arr);
   var max=0;
   var min=0;
//    for(var i=0;i<k;i++){
//        min=min+arr[i];
       
//    }
//    for(var i=arr.length-1;i>k;i--){
//     max=max+arr[i]
    
// }
for(var i=0,j=len-1;i<k;i++,j--){
    max=+arr[j]
    min=+arr[i]
}
  
//    console.log(min,max);
   console.log(max-min);
   
}

function sort1(arr){
    for(var j=0;j<arr.length-1;j++){
        var min=j
        for(var z=j+1;z<arr.length;z++){
         if(arr[z]<arr[min]){
             min=z
         }
         
        }
        var temp=arr[min]
         arr[min]=arr[j]
         arr[j]=temp
    }
    return arr
}


function runProgram(input){
   var newInput=input.trim().split("\n");
//    console.log(newInput); 
   for(var i=1;i<newInput.length;i+=2){
       var [len,k]=newInput[i].trim().split(" ").map(Number);
       var arr=newInput[i+1].trim().split(" ").map(Number);
    //    console.log(arr,len,k);
    var arr1=sort1(arr) 
    // console.log(arr1); 
    Max(arr1,len,k);
   }
    
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`1
  5 1
  1 2 3 4 5`);
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