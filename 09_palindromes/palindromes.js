const palindromes = function (string) {
    const lowerCaseString = string.toLowerCase();
    const noPunctuationString = lowerCaseString.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g, '');
    const splitArr = noPunctuationString.split("");
    const reverseArr = splitArr.reverse();
    const joinArr = reverseArr.join("")
    
    
    return joinArr === noPunctuationString
};

// Do not edit below this line
module.exports = palindromes;
