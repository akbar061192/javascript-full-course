// important string methods

let fullName = '  John Peter   ';
console.log(fullName.length);

// trim() will remove spaces from start and end of the string
// Always returns a new string will not change or mutuate the original string.

const trimmedName = fullName.trim();
console.log(trimmedName.length);

// toUpperCase()

let course = 'JavaScript';
console.log(course);
let capitalizedName = course.toUpperCase();
console.log(capitalizedName);

// toLowerCase()

let framework = 'React';
console.log(framework);
let loweredName = framework.toLowerCase();
console.log(loweredName);

// slice()
let city = 'New York';
// takes start and end index of a string and returns the slice of that string

// start 0 --> inclusion
// end 2 --> exlusion --> end-1
const slicedCity = city.slice(0, 3);
// const slicedCity = city.slice(4);
console.log(slicedCity);
