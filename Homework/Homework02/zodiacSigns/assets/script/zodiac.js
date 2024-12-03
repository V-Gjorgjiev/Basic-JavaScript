// Using If-Else statments

// let yearOfBirth = parseInt(prompt("Enter your year of birth to find your Chinese Zodiac Sign"));

// let calculation = (yearOfBirth - 4) % 12;
// if (calculation === 0) {
//     zodiacSign = "Monkey";
//     alert("Your Chinese Zodiac Sign is Rat");
//     console.log("Your Chinese Zodiac Sign is Rat");
// } else if (calculation === 1) {
//     zodiacSign = "Rooster";
//     alert("Your Chinese Zodiac Sign is Ox");
//     console.log("Your Chinese Zodiac Sign is Ox");
// } else if (calculation === 2) {
//     zodiacSign = "Tiger";
//     alert("Your Chinese Zodiac Sign is Tiger");
//     console.log("Your Chinese Zodiac Sign is Tiger");
// } else if (calculation === 3) {
//     zodiacSign = "Rabbit";
//     alert("Your Chinese Zodiac Sign is Rabbit");
//     console.log("Your Chinese Zodiac Sign is Rabbit");
// } else if (calculation === 4) {
//     zodiacSign = "Dragon";
//     alert("Your Chinese Zodiac Sign is Dragon");
//     console.log("Your Chinese Zodiac Sign is Dragon");
// } else if (calculation === 5) {
//     zodiacSign = "Snake";
//     alert("Your Chinese Zodiac Sign is Snake");
//     console.log("Your Chinese Zodiac Sign is Snake");
// } else if (calculation === 6) {
//     zodiacSign = "Horse";
//     alert("Your Chinese Zodiac Sign is Horse");
//     console.log("Your Chinese Zodiac Sign is Horse");
// } else if (calculation === 7) {
//     zodiacSign = "Goat";
//     alert("Your Chinese Zodiac Sign is Goat");
//     console.log("Your Chinese Zodiac Sign is Goat");
// } else if (calculation === 8) {
//     zodiacSign = "Monkey";
//     alert("Your Chinese Zodiac Sign is Monkey");
//     console.log("Your Chinese Zodiac Sign is Monkey");
// } else if (calculation === 9) {
//     zodiacSign = "Rooster";
//     alert("Your Chinese Zodiac Sign is Rooster");
//     console.log("Your Chinese Zodiac Sign is Rooster");
// } else if (calculation === 10) {
//     zodiacSign = "Dog";
//     alert("Your Chinese Zodiac Sign is Dog");
//     console.log("Your Chinese Zodiac Sign is Dog");
// } else {
//     zodiacSign = "Pig";
//     alert("Your Chinese Zodiac Sign is Pig");
//     console.log("Your Chinese Zodiac Sign is Pig");
// }


// Using arrays

let zodiacSigns = ["Rat","Ox","Tigger","Rabbit","Dragon","Snake","Horse","Goat","Monkey","Rooster","Dog","Pig"];

let message = (prompt("Enter your year of birth to find your Chinese Zodiac Sign"));
let yearOfBirth = parseInt(message);

if (isNaN(yearOfBirth)) {
    alert("Please enter a valid year of birth");
} else {
    let result = ((yearOfBirth - 4) % 12);
    let zodiacSign = zodiacSigns[result];
    alert(`Your Chinese Zodiac Sign is ${zodiacSign}`);
    console.log(`Your Chinese Zodiac Sign is ${zodiacSign}`);
}