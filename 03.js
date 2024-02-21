// Find the Largest Number in an Array**: Write a JavaScript function that takes
// an array of numbers as input and returns the largest number in the array.

function findLargestNum(arr){
    let largestNum = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largestNum){
            largestNum = arr[i];
        }
    }

    return largestNum;
}

let array = [10,23,45,2,24,100];
console.log("original array : " , array);
let result = findLargestNum(array);
console.log("Largest Element : ",result);

