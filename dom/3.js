// Dom Traversing

const ul = document.querySelector('ul');
console.log(ul);
console.log(ul.parentNode.parentNode.parentNode.parentNode);
console.log(ul.parentElement.parentElement.parentElement.parentElement);

// get the child

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

console.log(ul.previousSibling.previousSibling);
console.log(ul.nextSibling.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
