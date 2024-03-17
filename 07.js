// Check for Prime Number: Write a JavaScript function that checks whether a given 
// number is prime or not.

function isPrime(num){
    if (num <= 1){
        return false;
    }

    for (let i = 2; i < Math.sqrt(num); i++){
        if (num % i === 0)
        return `${num} is not a Prime Number`;
    }
    return `${num} is a Prime Number`;;
}

console.log(isPrime(17));
