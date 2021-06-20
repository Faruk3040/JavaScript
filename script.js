/*
let js = 'amazing';
if (js === 'amazing') alert('JavaScript is Fun!');
console.log(40 + 30 + 10 - 20);

let js = 'amazing';
if (js === 'amazing') alert('javascript is fun!');
40 + 30 + 10 - 20;
console.log(40 + 30 + 10 - 20);
console.log("Faruk Ahmed");

let firstName = "Faruk";
let lastName = "Ahmed";
console.log(firstName);
console.log(lastName);

let person = 'faruk';
let PI = 3.1415;

let myFirstJob = 'programmer';
let myCurrentJob = 'web developer';

console.log(myFirstJob);
console.log(myCurrentJob);

let country = 'Bangladesh';
let continent = 'Asia';
let population = 14;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = 'Bangla';
const country = 'Bangladesh';
const continent = 'Asia';
const isIsland = false;
isIsland = true;

*/

// true;
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);

//typeof show which type of data

console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Faruk');

//dynamic typing
let javascript = true;
console.log(javascript);
console.log(typeof javascript);

javascript = 'YES!';
console.log(typeof javascript);

//undefine

//let year;
//console.log(year);
//console.log(typeof year);

//year = 1996;
//console.log(typeof year);
//console.log(typeof null);

//let age = 24;
//age = 25;

//const birthYear = 1996;
// birthYear = 1997;

//var job = 'programmer';
//job = 'web developer';

//lastName = 'Ahmed';
//console.log(lastName);

//math operators
const ageFaruk = 2021 - 1996;
const ageEmon = 2021 - 1998;
console.log(ageFaruk, ageEmon);

//const now = 2021;
//const ageSujon = now - 1992;
//const ageAbdulla = now - 1994;
//console.log(ageSujon, ageAbdulla);

//console.log(ageSujon * 2, ageSujon / 10, 2 ** 3);
//2**3 means 2 to the power of 3 = 2*2*2

//const firstName = 'Faruk';
//const lastName = 'Ahmed';
//console.log(firstName + ' ' + lastName);

// assignment operators
let z = 10 + 5; // 15
z += 10; // x = x + 10 = 25
z *= 4; // x = x*4 = 100
z++; // x = x + 1
z--;
z--;
console.log(z);

//comparison operators
console.log(ageFaruk > ageEmon); // >,<,>=,<=,
console.log(ageEmon >= 18);

//console.log(now - 1992 > now - 1994);


const now = 2021;
const ageSujon = now - 1992;
const ageAbdulla = now - 1994;
console.log(now - 1992 > now - 1994);

let x, y;
x = y = 25 - 10 - 5; // x=y= 10
console.log(x, y);

const averageAge = (ageFaruk + ageEmon) / 2
console.log(ageFaruk, ageEmon, averageAge);


//coding challenge

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

const firstName = 'Faruk';
const job = 'Web Developer';
const birthYear = 1996;
const year = 2021;

const faruk = " I'm " + firstName + ' , a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(faruk);

const farukNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}! `;
console.log(farukNew);

console.log(`just a regular string.....`);

console.log('string with \n\
multiple \n\
line');

//templete string

console.log(`string with
multiple 
line`);

//if else statement
//const age = 19;
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sara can start driving licence 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sara is too young. Wait another ${yearsLeft}  years 🙂`);
}

//const birth = 1996;
const birth = 2004;
let century;
if (birth <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/

//coding challenge 2
// part -1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;


//const massMark = 95;
//const heightMark = 1.88;
//const massJohn = 85;
//const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);


// console.log(BMIMark, BMIJohn);
// if (BMIMark > BMIJohn) {
//     console.log("Mark's BMI is higher than John's!");
// } else {
//     console.log("John's BMI is higher than Mark's!");
// }

//part-2

console.log(BMIMark, BMIJohn);
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's(${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's(${BMIMark})!`);
}

//convert string to number && number to string

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old ');
console.log('I am ' + '23' + ' years old ');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '18');

// 5 flasy value 0 , '', undefine, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('faruk'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all🙂");
} else {
    console.log("You should get a job");
}

let height;
if (height) {
    console.log("Height is defined");
} else {
    console.log("Height is undefined");
}

//equality operator
/*
const age = '18';
if (age === 18) console.log("You just became an adult ✌ (strict)");

if (age == 18) console.log("You just became an adult ✌ (loose)");

const favourit = Number(prompt("What's your favourit number")); //jodi === use kori then promt er agay Number command use korte hobe ar jodi == use kori then Number use korra lagbe.
console.log(favourit);
console.log(typeof favourit);
if (favourit === 7) { // '23' == 23 (== dairak string ke number e convert kore but === pare na convert korte)
    console.log('Cool! 7 is an amazing number');
}
*/

const hasDriversLicense = true //false  //A
const hasGoodVision = true //false  //B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);



//if (hasDriversLicense && hasGoodVision) {
//   console.log('Sara is able to drive!');
//} else {
//  console.log('someone else should drive...');
//}

/*const isTired = true //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && isTired) {
    console.log('Sara is able to drive!');
} else {
    console.log('someone else should drive...');
}
*/
const scoreDolphins = (96 + 108 + 96) / 3;
const scoreKoalas = (88 + 110 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koals win the trophy🏆');
} else if (scoreDolphins === scoreKoalas) {
    console.log('Both win the trophy');
}

//switch statement

const day = 'friday';

switch (day) {
    case 'monday': // day === 'monday'
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
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}