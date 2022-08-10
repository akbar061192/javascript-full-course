const showTime = () => {
  const hours = document.querySelector('.hours');
  const mins = document.querySelector('.minutes');
  const seconds = document.querySelector('.seconds');
  const session = document.querySelector('.session');

  let date = new Date();
  let hrs = date.getHours();
  let minutes = date.getMinutes();
  let secs = date.getSeconds();

  if (hrs >= 12) {
    session.innerHTML = 'PM';
  } else {
    session.innerHTML = 'AM';
  }

  if (hrs > 12) {
    hrs = hrs - 12;
  }

  hours.textContent = hrs;
  mins.textContent = minutes;
  seconds.textContent = secs;
};

// setTimeout(() => {
//   showTime();
// }, 1000);

showTime();
setInterval(() => {
  showTime();
}, 1000);
