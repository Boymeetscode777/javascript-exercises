const leapYears = function(year) {
    if (year%4===0){
        return year + " is a leap year"
    } else {
        return year + " is not a leap year"
    }
};

console.log(leapYears(2000))

// Do not edit below this line
module.exports = leapYears;
