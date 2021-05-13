// The quick brown fox jumped over the fence. 

const reverseString = (str) => {
    let words = str.split(" ");
    words = words.reverse();
    let ret = "";
    for(let i = 0; i < words.length; i++) {
        if(i == 0){
            ret = words[i];
        } else {
            ret = ret + " " + words[i]
        }
    }
    return ret;
}


module.exports = reverseString; 