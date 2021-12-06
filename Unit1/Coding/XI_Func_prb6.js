// // Given a string swap the case and print the output
// // Sample Input - Test
// // Sample Output - tEST

// if(letters[i] === letters[i].toLowerCase()){
//     letters[i] = letters[i].toUpperCase();
// }else {
//     letters[i] = letters[i].toLowerCase();
// }

var arr=["Test"];
function swap(arr) {
    for(var i=0;i<arr.length;i++){
        // console.log(arr[i]);
        var ab=[]
        if(arr[i]==arr[i].toLowerCase()){
            ab.push(arr[i].toUpperCase());
        }
        else{
            ab.push(arr[i].toLowerCase());
        }
    }
    return ab;
}
console.log(swap(arr));