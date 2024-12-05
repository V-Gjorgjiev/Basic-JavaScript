function whatAmI(input) {
    console.log(`The type of ${input} is: ${typeof input}`);
}

let objectName = {};
let booleanName = true && false;
let numberName = 32
let stringName = 'Vitomir'
let undefinedName;

whatAmI(objectName)
whatAmI(booleanName);
whatAmI(numberName);
whatAmI(stringName);
whatAmI(undefinedName);