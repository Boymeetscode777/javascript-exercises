const fibonacci = function(number) {
    if (number < 0) return "OOPS"
    number = parseInt(number)

    if (number === 0) return 0;
    if (number === 1) return 1;

    let a = 0
    let b = 1

    for (let i = 2; i <= number; i++){
      temp = a + b;
      a = b;
      b = temp
    }
        return b
};

// Do not edit below this line
module.exports = fibonacci;
