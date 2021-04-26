// Write a function that reverses a string 
// The input string s is given as an array of characters
// Do not allocate extra space for another array
// You must do this by modifying the input array in place

// using built in methods 
const reverseString = (s) => {
    return s.reverse();
}

// using no built in methods 
const reverseString2 = (s) => {
    let reverse = s.length - 1;
    let length = Math.floor(s.length/2)
    for(let i = 0; i < length; i++) {
     let temp = s[i];
     s[i] = s[reverse];
     console.log(s[i]);
     s[reverse] = temp;
     reverse--;
 }
 return s; 
}

module.exports = reverseString;