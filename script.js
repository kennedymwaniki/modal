'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal); // declare the openModal function and call it when the buttons are clicked

const closeModal = function () {
  //function that gets executed when we click on modal or overlay
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal); // calling the closeModal function but () are not required
overlay.addEventListener('click', closeModal); // close modal closes when overlay is clicked.

document.addEventListener('keydown', function (e) {
  // the e is a parameter for the event to be called(figuring out which key is pressed)
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // if press key is escape  the modal does not contain the hidden class then close the modal
    closeModal();
  }
});
