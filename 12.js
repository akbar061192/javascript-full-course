// loops

// while
// print 0-->10

let i = 0;
while (i <= 10) {
  // console.log(i);
  i++;
}

// console.log('value of i is', i);

// do while

let j = 10;

do {
  // console.log(j);
  j++;
} while (j <= 9);

// for loops
// break and continue --> keywords

for (let k = 0; k <= 10; k++) {
  if (k === 4) {
    console.log('doing something');
    break;
    // continue;
  }
  console.log(k);
}
