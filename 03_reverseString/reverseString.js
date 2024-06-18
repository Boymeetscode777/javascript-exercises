const reverseString = function(stringToSplit) {
    const splitToArray = stringToSplit.split("");
    const reverseArray = splitToArray.reverse();
    const joinToString = reverseArray.join("");
    return joinToString
};

// Do not edit below this line
module.exports = reverseString;
