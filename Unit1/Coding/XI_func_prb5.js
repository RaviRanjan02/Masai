// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input
// ["MA", "SA", "I", "SCH", "OOL"]

var arr=["MA", "SA", "I", "SCH", "OOL"];

function lower(str) {
    for(var i=0;i<arr.length;i++){
        console.log(arr[i].toLowerCase());
    }
}
lower(arr);