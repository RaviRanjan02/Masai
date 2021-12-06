// You are given a number N, you need to find sum of all the even numbers which are less than or equal to N.
var N=(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);
var sum=0;
var count1=0;
for(var i=1;i<=N;i++){
    if(i%2==0){
        console.log(i);
        count1++;
        sum=sum+i;
    }

}
console.log(count1);
console.log(sum);


// You are given a number N, you need to find sum of all the odd numbers which are less than or equal to N.
var No=(1,2,3,4,5,6,7,8,9,10)
var sum=0;
var count2=0;
for(var i=1;i<=No;i++){
    if(i%2!=0){
        console.log(i);
        count2++;
        sum=sum+i;
    }
}
console.log(count2);
console.log(sum);

