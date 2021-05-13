// 0 1 1 2 3 5 8 13 21 

const isFibonacci = (num) => {
    // always will start with 0 & 1 
    // the sequence always adds the last 2 
    // together to form the next one 
    if(num == 0 || num == 1) {
        return true; 
    } else if(num < 0) {
        return false; 
    }

    let a = 0; 
    let b = 1; 
    let temp;

    // fix conditional because if num is not apart of the
    // sequence then this will infinitely loop
    while(a + b <= num) {
        temp = a + b;
        a = b;
        b = temp; 
        if(b == num) {
            return true; 
        } 
    }
    return false; 
}

module.exports = isFibonacci; 