// ternary operator
let age = 29;

let output = age <= 10 ? 'age is less than or equal to 10' : 'age is some other value';

let output1 = age <= 10 ? 'age is <=10' : age === 20 ? 'age is 20' : age === 25 ? 'age is 25' : 'age is some other value';

// console.log(output1);

//  AND--> && OR--> || opreators

let num1 = 20;
let num2 = 30;

if (num1 === 10 && num2 === 20) {
  console.log('inside if block');
} else {
  console.log('inside else block');
}

if (num1 === 10 || num2 === 20) {
  console.log('inside if block');
} else {
  console.log('inside else block');
}
