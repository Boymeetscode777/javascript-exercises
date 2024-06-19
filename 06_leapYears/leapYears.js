const leapYears = function(year) {
    if (year%4===0 && (year%400===0 || year % 100 !== 0)) {
        return year + " is a leap year"
    } else {
        return year + " is not a leap year"
    }
};

// Do not edit below this line
module.exports = leapYears;
