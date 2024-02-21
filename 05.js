// Calculate Factorial: Write a JavaScript function that calculates the
// factorial of a non-negative integer.

function calFactorial(number){
    let fact = 1;
    for (let i = 1; i <= number; i++){
        fact = fact * i;
    }
    return fact;
}

let num = 9;
console.log("given value :", num);
const result = calFactorial(num);
console.log(result);