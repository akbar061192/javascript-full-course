let age = 10;

if (age > 18) {
  //below code will be exectued only when above condition is true
  console.log('age is 18');
} else {
  console.log('age is some other value');
}

// nested if else

let num = 5;

if (num <= 15) {
  console.log('num is <=15');
  if (num === 5) {
    console.log('num is 5');
  } else {
    console.log('num is some thing');
  }
} else {
  console.log('else part');
}

//if else if else

let number = 12;

if (number <= 15) {
  console.log('number is less than or equal to 15');
} else if (number === 20) {
  console.log('number is 20');
} else {
  console.log('some other number');
}

// truthy and falsy values
// false
// 0
// ''  or  ""
//null
//undefined

let info = 'e';

if (info) {
  console.log('inside if block');
} else {
  console.log('inside else block');
}
