function celsiusToFahreinheit (temperature) {
    var aux = 9/5;
    var fahrenheitTemperature = temperature * aux + 32;
    return fahrenheitTemperature;
}

function fahrenheitToCelsius (temperature) {
    var aux = 5/9;
    var celsiusTemperature = (temperature - 32) * aux;
    return celsiusTemperature;
}

console.log(celsiusToFahreinheit(20));
console.log(fahrenheitToCelsius(68));