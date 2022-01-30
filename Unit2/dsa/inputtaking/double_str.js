function substring(str1,str2){
    
   for(var i=0;i<str1.length;i++){
    var bag="";
    for(var j=i;j<str1.length;j++){
        bag=bag+str1[j]+""
    }
    console.log(bag);
    }
    for(var i=0;i<str2.length;i++){
        var bag1="";
        for(var j=i;j<str2.length;j++){
            bag1=bag1+str2[j]+""
        }
        console.log(bag1);
        }
        if(bag===bag1){
            console.log("Yes");
        }
        else{
            console.log("No");
        }
        
  
}

function runProgram(input){
    var newInput =input.trim().split("\n")
     console.log(newInput);
    
    var str1=newInput[0];
    console.log(str1);
    var str2=newInput[1];
    console.log(str2);
    substring(str1,str2)
    
}


 
if (process.env.USERNAME === "Ravi") {
     runProgram(` masai
     sai `);
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