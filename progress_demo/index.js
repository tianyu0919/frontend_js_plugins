const progress = new ltyProgress('#container', {
  height: '16px',
  width: '200px',
});

let btn = document.querySelector('#btn');
let btnDone = document.querySelector('#btn-done');

btn.addEventListener('click', ev => {
  let val = Math.random() * 100;
  progress.setValue(val);
});

btnDone.addEventListener('click', ev => {
  progress.done();
});