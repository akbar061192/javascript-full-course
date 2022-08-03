// how to copy/clone an array

// how to concatenate two arrays

let arr1 = ['item1', 'item2'];
let arr2 = ['item3', 'item4'];

// let finalArray = arr1.concat(arr2, ['item5']);
// console.log(finalArray);

console.log(arr1);
console.log(arr2);

// copying an array
// spread operator

let arrayCopied = [...arr1, ...arr2, 'item5'];
arrayCopied.push('new item');
console.log(arrayCopied);
