// You are given a string s, you have to find the count of all such substrings which start and ends with the same character.
var count=0;
var name1="abcab"
for(var i=0;i<name1.length;i++){
    for(var j=i;j<name1.length;j++){
        var bag="";
        for(var z=i;z<=j;z++){
         bag=bag+name1[z];
        }
        var last_index=bag.length-1;
        if(bag[0]==bag[last_index]){
            count++;
    }
}
}
console.log(count);