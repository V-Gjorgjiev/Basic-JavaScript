function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function getTemperature() {
    let personChoice = prompt('Enter F for fahrenheit and C for celsius')
    let personInput = parseInt(prompt('Please enter the value you wish to be converted'));
    
    if (personChoice !== 'C' && personChoice !== 'F') {
        alert('Please choose between F and C');
        personChoice = prompt('Enter F for fahrenheit and C for celsius')
    } else if (Number.isNaN(personInput)) {
        alert('Please enter a valid number');
        personInput = parseInt(prompt('Please enter the value you wish to be converted'));
    }

    if (personChoice === 'F') {
        let convertedValue = convertToCelsius(personInput);
        alert(`${personInput}°F is equal to ${convertedValue}°Celsius`);
    } else if (personChoice === 'C') {
        let convertedValue = convertToFahrenheit(personInput);
        alert(`${personInput}°C is equal to ${convertedValue}°Fahrenheit`);
    }
}

getTemperature();