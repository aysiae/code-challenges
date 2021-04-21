
// Given a string s, find the lengt of the longest substring without
// repeating characters

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is 'abc' which has a length of 3;

// Example 2:
// Input: s = 'pwwkew"
// Output: 3
// Explanation: The answer is 'wke' which has a length of 3

// Example 3:
// Input: s = 'deadri'
// Output: 5
// Explanation: The answer is 'eadri';


const lengthOfLongestSubstring = (s) => {
    let chars = s.split('');
    let max = checkString(chars);
    return max; 
}


const checkString = (chars, max=0) => {
    let substring = [];
    let length = 0;
    if(chars.length == 1) { // if the string is either at its last character or the only character 
        return max; // we want to return max 
    } else { // otherwise we want to loop through the string set 
        for(let i = 0; i < chars.length; i++) {
            // if substring does not include chars[i]
            if(!substring.includes(chars[i])) {
                // then we will push chars[i] to substring
                substring.push(chars[i]);
            } else {
                // if substring does include chars[i]
                console.log('substring', substring);
                // we check if substring.length is longer than max
                if(substring.length > max) {
                    console.log(`${substring.length} > ${max}`);
                    // if it is, we set length to substring.length
                    length = substring.length; 
                } else {
                    //otherwise we set length to max 
                    length = max; 
                }
                // and we will recall checkString using with every indice except 0
                // and we will place length in for max 
                console.log('checking string', chars.slice(1), length);
                length = checkString(chars.slice(1), length);
                // we will break from the loop 
                break;
            }
        }
        // return lnegth;
        return length || max;
    }
}

module.exports = lengthOfLongestSubstring;