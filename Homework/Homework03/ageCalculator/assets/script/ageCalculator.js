let currentYear = new Date().getFullYear();
let birthYear = parseInt(prompt('Enter your birth year: '));

if (Number.isNaN(birthYear)) {
    alert('Please enter valid birth year.');
    birthYear = parseInt(prompt('Enter your birth year: '));
}

function calculateAge(birthYear, currentYear) {
    let age = currentYear - birthYear;
    if (Number.isNaN(birthYear)) {
        alert('Please enter valid birth year.');
    } else {
        return `You are ${age} years old.`;
    }
}

console.log(`The current year is: ${currentYear}`);
console.log(`Your birth year is: ${birthYear}`);
alert(calculateAge(birthYear, currentYear));