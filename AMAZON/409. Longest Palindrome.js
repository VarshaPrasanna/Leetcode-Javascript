
var longestPalindrome = function(s) {
    const count = new Map();
    let oddCount = 0;

    for (let char of s) {
        if (count.has(char)) {
            count.set(char, count.get(char) + 1);
        } else {
            count.set(char, 1);
        }
    }

    for (const c of count.values()) {
        if (c % 2 !== 0) {
            oddCount++;
        }
    }

    return s.length - Math.max(0, oddCount - 1);
    
};