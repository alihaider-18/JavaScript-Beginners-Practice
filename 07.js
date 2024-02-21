// Check for Prime Number: Write a JavaScript function that checks whether a given 
// number is prime or not.

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}
console.log(isPrime(7));  // Output: true
console.log(isPrime(12)); // Output: false
