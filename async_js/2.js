// promises
// pending
// fullfilled / resolved
// not-fullfilling / rejected

const myPromise = new Promise((resolve, reject) => {
  const willMeet = true;
  if (willMeet) {
    resolve('Great... i have met you!');
  } else {
    reject('Oops...I missed it..');
  }
});

// console.log(myPromise);

// Thenables-- >using of then or then's

// myPromise
//   .then(response => {
//     return response + ' I make sure will treat you..';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('See you soon');
//   });

const url = 'https://jsonplaceholder.typicode.com/users';

// AJAX

const users = fetch(url);
// console.log(users);

// fetch(url)
//   .then(response => {
//     return response.json();
//   })
//   .then(output => {
//     console.log(output);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// Async await

const myUsersData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

myUsersData();
