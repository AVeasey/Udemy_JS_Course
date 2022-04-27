/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);


// Variable name conventions
let PI = 3.1415;

let lastName = "Henry";

let country = 'Australia';
let continent = 'Australasia';
let population = 22000000;

console.log(country, continent, population);


// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun)

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);


// LET, CONST & VAR
let age = 30;
age = 31;

const birthYear = 1991;

var job = 'programmer';
job = 'teacher';


// JS Operators

// Math Operators
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x)

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


// Operator Precedence
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;

x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah);
console.log(averageAge);


// Coding Challenge #1

// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;
console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);


// Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonas);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


// Taking Decisions: IF/ELSE Statements
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving licence 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😃`)
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// Coding Challenge #2

// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;
console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`)
}


// Type Conversion and Coercion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(String(23), 23);

console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');


// Truthy and Falsy Values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log(`Don't spend it all`);
} else {
    console.log(`You should get a job`);
}

let height = 123;
if (height) {
    console.log(`Yay! Height is defined`);
} else {
    console.log(`Height is UNDEFINED`)
}


// Equality Operators
const age = '18';
if (age === 18) console.log(`You just became an adult (strict)`);

if (age == 18) console.log(`You just became an adult (loose)`);

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);

if (favourite === 4) {
    console.log('Cool! 4 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 4 or 7 or 9')
}

if (favourite !== 4) console.log('Why not 4?')


// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive...')
// }

const isTired = false; // C

// console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive...')
}


// Coding Challenge #3
// const dolphinesGame1 = 96;
// const dolphinesGame2 = 108;
// const dolphinesGame3 = 89;

// const koalasGame1 = 88;
// const koalasGame2 = 91;
// const koalasGame3 = 110;

// const dolphinesGame1 = 97;
// const dolphinesGame2 = 112;
// const dolphinesGame3 = 101;

// const koalasGame1 = 109;
// const koalasGame2 = 95;
// const koalasGame3 = 123;

const dolphinesGame1 = 97;
const dolphinesGame2 = 112;
const dolphinesGame3 = 101;

const koalasGame1 = 109;
const koalasGame2 = 95;
const koalasGame3 = 106;

const dolphinesAvg = (dolphinesGame1 + dolphinesGame2 + dolphinesGame3) / 3;
const koalasAvg = (koalasGame1 + koalasGame2 + koalasGame3) / 3;

console.log(`Dolphines Average: ${dolphinesAvg},
    Koalas Average: ${koalasAvg}`);

if (dolphinesAvg > koalasAvg) {
    console.log('Dolphines won! 🏆')
} else if (dolphinesAvg < koalasAvg) {
    console.log('Koalas won! 🏆')
} else {
    console.log('The Dolphines and Koalas tied!')
}


// The Switch Statement
const day = 'thursday';

switch (day) {
    case 'monday': // day === 'monday' (Strict comparison)
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend!')
        break;
    default:
        console.log('Not a valid day!')
}


// Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷'
} else {
    drink2 = 'water 💧'
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/


// Coding Challenge #4
const bill = 275;
// const bill = 40;
// const bill = 430;

const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);