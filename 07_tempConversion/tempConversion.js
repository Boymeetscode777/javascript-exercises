const convertToCelsius = function(tempInFahrenheit) {
  toCelcius=(tempInFahrenheit-32)*(5/9);
  return Number(toCelcius).toFixed(1);
};

const convertToFahrenheit = function(tempInCelcius) {
  toFahrenheit=(tempInCelcius*(9/5)+32);
  return Number(toFahrenheit).toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
