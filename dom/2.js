// Styling Elements

const title = document.querySelector('#main-heading');
// console.log(title);

title.style.color = 'red';

// Creating Elements

const ul = document.querySelector('ul');
console.log(ul);

const newItem = document.createElement('li');
console.log(newItem);

ul.append(newItem);

// add inner text of newly create element
newItem.innerText = 'X-men';

// const firstLi = document.querySelector('.list-items');
// console.log(firstLi);

// console.log(firstLi.innerText);
// console.log(firstLi.innerHTML);
// console.log(firstLi.textContent);

// modifying attributes and classes

// newItem.setAttribute('id', 'main-heading');
// newItem.removeAttribute('id');

newItem.classList.add('list-items');
newItem.classList.add('new-class');

const listItems = document.querySelectorAll('.list-items');

// console.log(listItems);

for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.color = 'blue';
  listItems[i].style.fontSize = '2rem';
}

newItem.classList.remove('list-items');

newItem.remove();
