// DOM MANIPULATION

// get element by id()

const title = document.getElementById('main-heading');
console.log(title);

// get elemetn by class name()

const items = document.getElementsByClassName('items');
console.log(items);

const listItems = document.getElementsByClassName('list-items');
console.log(listItems);

// get element by tag name()

const lists = document.getElementsByTagName('li');
console.log(lists);

// querySelector()

const container = document.querySelector('div');
console.log(container);

const liItems = document.querySelector('.list-items');
console.log(liItems);

const allItems = document.querySelectorAll('.list-items');
console.log(allItems);
