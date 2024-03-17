// Find the Longest Word in a String: Write a JavaScript function that takes a
// sentence as input and returns the longest word in the sentence.

function findLongestWord(str){
    const words = str.split(' ');

    let longestWord = "";

    for (let i = 0; i < words.length; i++){
        const currentWord = words[i];

        if(currentWord.length > longestWord.length){
            longestWord = currentWord;
        }
    }

    return longestWord;
}

const str = "this world is an very interesting place";
const longest = findLongestWord(str);
console.log(`Longest Word : ${longest}`);

