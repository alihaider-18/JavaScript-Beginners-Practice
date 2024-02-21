// Check for Palindrome: Write a JavaScript function that checks whether a given 
// string is a palindrome (reads the same backward as forward).

function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    console.log("given string : ", str);
    console.log("reversed string : ", reversed);
    return str === reversed;
}

let result = isPalindrome("LEVEL");
if (result){
    console.log("Given Strings is Palindrome");
}
else{
    console.log("Given String is not palindrome");
}
