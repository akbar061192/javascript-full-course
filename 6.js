// important string methods

let fullName = '  John Peter   ';
// console.log(fullName.length);

// trim() will remove spaces from start and end of the string
// Always returns a new string will not change or mutuate the original string.

const trimmedName = fullName.trim();
// console.log(trimmedName.length);

// toUpperCase()

let course = 'JavaScript';
// console.log(course);
let capitalizedName = course.toUpperCase();
// console.log(capitalizedName);

// toLowerCase()

let framework = 'React';
// console.log(framework);
let loweredName = framework.toLowerCase();
// console.log(loweredName);

// slice()
let city = 'New York';
// takes start and end index of a string and returns the slice of that string

// start 0 --> inclusion
// end 2 --> exlusion --> end-1
const slicedCity = city.slice(0, 3);
// const slicedCity = city.slice(4);
// console.log(slicedCity);

const string1 = 'If you learn javascript';
const string2 = ' then you can easily apply for frontend and backend jobs';

// charAt - > take the position index and returns the character at that index
const charAtOutput = string1.charAt(10);
console.log(charAtOutput);

// concat the two or more strings
const concatOutput = string1.concat(string2);
console.log(concatOutput);

// endsWith
const endsWithOutput = string2.endsWith('jobs');
console.log(endsWithOutput);

// includes -> checks for existing of an charcter in a string.
const includesOutput = string1.includes('pt');
console.log(includesOutput);

// indexOf -- > takes a char or string and returns the index of that char or string.
const indexOfOutput = string1.indexOf('of');
console.log(indexOfOutput);

// substring -- similiar to slice method which will extract a particular substring from a main string.

// const subStringOutput = string1.substring(0, 4);
// console.log(subStringOutput);

// const sliceOutput = string1.slice(0, 4);
// console.log(sliceOutput);

// const subStringOutput = string1.substring(-2, 5);
// console.log(subStringOutput);

// const sliceOutput = string1.slice(-2);
// console.log(sliceOutput);

const subStringOutput = string1.substring(12, 0);
console.log(subStringOutput);

const sliceOutput = string1.slice(12, 0);
console.log(sliceOutput);
