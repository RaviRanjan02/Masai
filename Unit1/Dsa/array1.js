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
// array traversal forward and horizontal
var bag="";
for(var i=0;i<row;i++){
    bag+=(items[i])+" "
}
console.log(bag);

for(var i=0;i<row;i++){
    for(var j=0;j<cols;j++){
        if(items[i]==items[j]){
            console.log(items[i][j]);
        }
      }
    }


    for(var i=row-1;i>=0;i--){
        for(var j=cols-1;j>=0;j--){
            if(items[j]==items[i]){
                console.log(items[i][j]);
            }
          }
        }
    
        for(var i=0;i<row;i++){
            for(var j=cols-1;j>=0;j--){
                if(items[j]==items[i]){
                    console.log(items[j][i]);
                }
              }
            }  
            
            
            for(var i=row-1;i>=0;i--){
                for(var j=0;j<cols;j++){
                    if(items[j]==items[i]){
                        console.log(items[i][j]);
                    }
                  }
                }

                for(var i=row-1;i>=0;i--){
                    for(var j=0;j<cols;j++){
                        if(items[j]==items[i]){
                            console.log(items[i][j]);
                        }
                      }
                    }













