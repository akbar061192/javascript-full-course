// Event Propogation
// Event delegation

// event propogation has 2 phases
// event capturing/trickling-->trickling down
// event bubbling --> bubbling up

document.querySelector('.div-1').addEventListener(
  'click',
  event => {
    console.log('div-1 clicked');
    event.stopPropagation();
  },
  true
);

document.querySelector('.div-2').addEventListener(
  'click',
  event => {
    console.log('div-2 clicked');
  },
  true
);

document.querySelector('.div-3').addEventListener(
  'click',
  () => {
    console.log('div-3 clicked');
  },
  true
);
