const sumAll = function(firstNum, lastNum) {
    let finalSum = 0;
    for (let i = firstNum; i <= lastNum; i++){
        finalSum += i;
    }
    return finalSum
};

// Do not edit below this line
module.exports = sumAll;
