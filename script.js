'use strict';
// selecting all elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const showBtns = document.querySelectorAll('.show-modal');
const clickme = document.querySelector('#mybtn');
const input = document.querySelector('.mytext');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showBtns.length; i++) {
  showBtns[i].addEventListener('click', openModal);
}

document.addEventListener('keydown', function (e) {
  console.log('event', e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

closeBtn.addEventListener('click', closeModal);

clickme.style.backgroundColor = 'red';
clickme.style.color = 'white';
clickme.style.border = 'none';
clickme.style.padding = '10px 15px';

clickme.addEventListener('click', function (e) {
  if (input.value !== '') {
    const h2 = document.querySelector('h2');
    h2.textContent = input.value;
    h2.classList.remove('hidden');
    closeModal();
    input.value = '';
  }
});
