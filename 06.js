// **Count Vowels in a String**: Write a JavaScript function that counts the number
// of vowels in a given string.

function countVowels(str){
    let lowerSrt = str.toLowerCase();
    let vowelsCount = 0;
    for ( let char of lowerSrt){
      if ('aeiou'.includes(char))
      vowelsCount++; 
    }
    return vowelsCount;
}

str = 'AliHaider';
console.log(countVowels(str));
