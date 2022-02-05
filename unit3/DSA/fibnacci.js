function Fibonocci(num){
    // console.log(num);
    
        if (num == 0)
            return 0;
        if (num == 1)
            return 1;
        return Fibonocci(num - 1) + Fibonocci(num - 2)
 }
    
    
    
    
    
    
    
    function runProgram(input){
        var newInput=input.trim().split(" ");
        // console.log(newInput);
        var num= +newInput[0];
        // console.log(num);
          console.log(Fibonocci(num));
    }
    
    
     
    
    if (process.env.USERNAME === "Ravi") {
      runProgram(`4`);
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