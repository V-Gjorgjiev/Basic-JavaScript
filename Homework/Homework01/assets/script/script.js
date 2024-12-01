// Exercise 1
let lengthInFeet = 15;
let convertedFromMeters = 0.3048;
let lengthInMeters = lengthInFeet * convertedFromMeters;
console.log(lengthInMeters);

// Exercise 2
let sideA = 10;
let sideB = 20;
let area = sideA * sideB;
console.log(area);

// Exercise 3
let radius = 2;
let pi = 3.14159265359 // Could've used Math.PI
let areaOfCircle = pi * radius * radius; // Could've used Math.PI ** radius
console.log(areaOfCircle);

// Exercise 4
let pricePerPhone = 119.95;
let taxRate = 0.05;
let totalPrice = pricePerPhone * taxRate;
console.log(totalPrice); // Tax price per phone

let phonePriceWithTax = pricePerPhone + totalPrice;
let totalTaxPrice = phonePriceWithTax * 30;
console.log(totalTaxPrice); // Total for all phones including tax price