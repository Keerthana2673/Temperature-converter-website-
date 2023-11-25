function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const selectedUnit = document.getElementById('unit').value;
    const resultElement = document.getElementById('result');

    if (temperatureInput === '' || isNaN(temperatureInput)) {
        resultElement.innerHTML = 'Please enter a valid number.';
        return;
    }

    const temperature = parseFloat(temperatureInput);

    switch (selectedUnit) {
        case 'celsius':
            displayResult(convertToCelsius(temperature), 'Celsius');
            break;
        case 'fahrenheit':
            displayResult(convertToFahrenheit(temperature), 'Fahrenheit');
            break;
        case 'kelvin':
            displayResult(convertToKelvin(temperature), 'Kelvin');
            break;
        default:
            resultElement.innerHTML = 'Invalid unit selected.';
    }
}

function convertToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function convertToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function convertToKelvin(celsius) {
    return celsius + 273.15;
}

function displayResult(result, unit) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Converted Temperature: ${result.toFixed(2)} ${unit}`;
}
