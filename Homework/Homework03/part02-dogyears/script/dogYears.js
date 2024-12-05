function ageConverter(year, sort) {
    if (Number.isNaN(year)) {
        alert ('Please enter age in numbers');
    } else if (sort === "human") {
        let dogYears = year * 7;
        return `Your ${sort} years are equal to ${dogYears} in dog years.`;
    } else if (sort === "dog") {
        humanYears = year / 7;
        return `Your ${sort} years are equal to ${humanYears} in human years.`;
    } else {
        alert('Please enter "human" or "dog" as the second argument.');
    }
}

let humanYears = parseInt(prompt('Enter your age'));
console.log(ageConverter(Number(humanYears), "human"));
let dogYears = parseInt(prompt('Enter your dogs age'));
console.log(ageConverter(Number(dogYears), "dog"));