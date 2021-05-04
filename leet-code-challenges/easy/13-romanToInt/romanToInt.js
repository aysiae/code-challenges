// Convert s roman numerals to an integer 
// Roman Numerals correspond as the following:
// I=1 - V=5 - X=10 - L=50 - C=100 - D=500 - M=1000
// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.

// Example
// Input: s = 'IV'
// Output: 4

// Example
// Input: s = 'MCMXCIV'
// Output: 1994


const romanToInt = (s) => {
    let roman = s.toUpperCase().split('');
    let nums = 0; 
    for(let i = 0; i < roman.length; i++) {
        if(roman[i] == 'I' && roman[i+1] == 'V') {
               i++;
               nums += 4;
        } else if (roman[i]=='I' && roman[i+1] == 'X') {
            i++;
            nums += 9; 
        } else if (roman[i]=='X' && roman[i+1] == 'L') {
            i++;
            nums += 40;
        } else if(roman[i]=='X' && roman[i+1] == 'C') {
            i++;
            nums += 90; 
        } else if(roman[i]=='C' && roman[i+1] == 'D') {
            i++;
            nums += 400;
        } else if (roman[i]=='C' && roman[i+1] == 'M') {
            i++;
            nums += 900;
        } else if(roman[i]=='I') {
            nums += 1;
        }  else if(roman[i]=='V') {
            nums += 5;
        } else if(roman[i]=='X') {
            nums += 10;
        } else if(roman[i]=='L') {
            nums += 50;
        }  else if(roman[i]=='C') {
            nums += 100;
        } else if(roman[i]=='D') {
            nums += 500;
        }  else if(roman[i]=='M') {
            nums += 1000;
        }
    }
    return nums; 
}

module.exports = romanToInt;