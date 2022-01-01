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
// array travesal form bottom 
for(var i=row-1;i>=0;i--){
    var bag="";
    for(var j=0;j<cols;j++){
        bag+=items[i][j]+" ";
    }
    console.log(bag);
}