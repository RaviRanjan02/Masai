function higherBound(len,k,arr){
let low=0;
let high=len-1;
let ans=-1;
while(low<=high){
    mid=low+Math.floor((high-low)/2);
    if(arr[mid]==k){
        ans=mid;
        low=mid+1;
    }else if(arr[mid]>k){
        high=mid-1;
    }
    else{
        low=mid+1
    }
}
return ans;
}

function lowerBound(len,k,arr){
    let low=0;
    let high=len-1;
    let ans=-1;
    while(low<=high){
        mid=low+Math.floor((high-low)/2);
        if(arr[mid]==k){
            ans=mid;
            high=mid-1;
        }else if(arr[mid]>k){
            high=mid-1;
        }
        else{
            low=mid+1
        }
    }
    return ans;  
}

function ocurrence(k,len,arr){
lowerBound=lowerBound(len,k,arr);
higherBound=higherBound(len,k,arr);
if(lowerBound==-1){
    return 0;
}
let res=higherBound-lowerBound+1;
return res
}

function runProgram(input){
    var newinput=input.trim().split("\n");
    var test=newinput[0].trim().split(" ").map(Number);
    var len=+test[0]
    var k=+test[1];
    var arr=newinput[1].trim().split(" ").map(Number);
  console.log(ocurrence(k,len,arr));
}


 

if (process.env.USERNAME === "Ravi") {
  runProgram(`6 3
  2 3 3 3 6 9`);
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