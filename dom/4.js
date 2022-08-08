// Events

// js listens for events and once the user has clicked(say) then js will keep listening for that event to happen and once it happens then it will trigger soemthing

const btnOne = document.querySelector('.btn1');
console.log(btnOne);

function alertBtn() {
  alert('I am clicked...');
}

// btnOne.addEventListener('click', alertBtn);
btnOne.addEventListener('click', () => {
  console.log('btn one clicked....');
});

const box3 = document.querySelector('.box3');
console.log(box3);

box3.addEventListener('mouseover', () => {
  box3.style.backgroundColor = 'blue';
});
