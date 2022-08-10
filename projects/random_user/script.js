const addUserBtn = document.querySelector('.add-user');
const doubleMoney = document.querySelector('.double-money');
const showMil = document.querySelector('.show-millionaires');
const sortRich = document.querySelector('.sort');
const calTotalWealth = document.querySelector('.calculate-wealth');

const main = document.querySelector('.main');

const apiUrl = 'https://randomuser.me/api';

let userData = [];

const getRandomUsers = async () => {
  const res = await fetch(apiUrl);
  const data = await res.json();
  const user = data.results[0];
  // transformation of incoming api data to valid data
  const newUserData = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  addUserData(newUserData);
};

// add new user
const addUserData = obj => {
  userData.push(obj);
  updateDOM();
};

getRandomUsers();
getRandomUsers();
getRandomUsers();

// updating dom
const updateDOM = (user = userData) => {
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  user.forEach(element => {
    const divElement = document.createElement('div');
    divElement.classList.add('person');
    divElement.innerHTML = `<strong>${element.name}</strong> $${element.money} `;
    main.appendChild(divElement);
  });
};

// double money
const doubleUserMoney = () => {
  userData = userData.map(user => {
    return { ...user, money: user.money * 2 };
  });
  updateDOM();
};

// show mil's
const showMill = () => {
  userData = userData.filter(user => user.money > 1000000);
  updateDOM();
};

// sort by richest
const sortRichest = () => {
  userData.sort((a, b) => b.money - a.money);
  updateDOM();
};

// calc wealth
const calculateWealth = () => {
  const wealth = userData.reduce((acc, curr) => {
    return (acc += curr.money);
  }, 0);

  const newDiv = document.createElement('div');
  newDiv.innerHTML = `<h3>Total Wealth: $${wealth}</h3>`;
  main.appendChild(newDiv);
};

// event listener for adding new user
addUserBtn.addEventListener('click', getRandomUsers);
doubleMoney.addEventListener('click', doubleUserMoney);
showMil.addEventListener('click', showMill);
sortRich.addEventListener('click', sortRichest);
calTotalWealth.addEventListener('click', calculateWealth);
