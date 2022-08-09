// event delegation

// document.querySelector('#cricket').addEventListener('click', event => {
//   console.log('cricket is clicked');
//   const target = event.target;
//   target.style.backgroundColor = 'red';
// });

// document.querySelector('#football').addEventListener('click', event => {
//   console.log('football is clicked');
//   const target = event.target;
//   target.style.backgroundColor = 'red';
// });

// document.querySelector('#tennis').addEventListener('click', event => {
//   console.log('tennis is clicked');
//   const target = event.target;
//   target.style.backgroundColor = 'red';
// });

document.querySelector('#sports').addEventListener('click', event => {
  const target = event.target;
  console.log(target);

  target.style.backgroundColor = 'red';
});
