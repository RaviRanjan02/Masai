function majorityEle(arr){
  var res=-1;
 var obj={};
 for(var i=0;i<arr.length;i++){
     if(obj[arr[i]]===undefined){
         obj[arr[i]]=1;
     }
     else{
         obj[arr[i]]+=1;
     }
 }
 var major =Math.floor(arr.length/2)
 for(var key in obj){
     if(obj[key]>major){
         res=key;
         break;
     }
 }
 return res;

}



function runProgram(input){
var newInput=input.trim().split("\n");

for(var i=1;i<newInput.length;i+=2){
   var arr=newInput[i+1].trim().split(" ").map(Number);
   console.log(majorityEle(arr));
}
 
}




if (process.env.USERNAME === "Ravi") {
runProgram(`2
6
1 1 1 1 2 3
5
1 1 2 2 3`);
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