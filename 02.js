// **Reverse a String**: Write a JavaScript function that takes a string 
// as input and returns the reverse of that string.

function reverseStr(str){
    return str.split("").reverse().join("");
}

const str = "Ali Haider"
const result = reverseStr(str);
console.log("Original String :",str);
console.log("Reversed String :",result);