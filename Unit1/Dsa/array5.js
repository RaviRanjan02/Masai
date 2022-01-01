var items=[];
items.push([1,2,3,4]);
items.push([5,6,7,8]);
items.push([9,10,11,12]);
items.push([13,14,15,16]);

// console.log(items);
// console.log(items.length);
// console.log(items[0].length);

var row=items.length;
var cols=items[0].length;
// reverse traversal of array
var bag="";
for(var i=0;i<row;i++){
    for(var j=cols-1;j>=0;j--){
        bag+=items[i][j]+" ";
    }
}
console.log(bag);