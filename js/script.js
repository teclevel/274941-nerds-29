const modalOpen = document.querySelector('.contact-button');
const popup = document.querySelector('.modal-contact');
const close = popup.querySelector('.modal-close');
const form = popup.querySelector('.fill-form');
const userName = popup.querySelector('.user-name');
const userEmail = popup.querySelector('.user-email');
const letter = popup.querySelector('.user-letter');

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('user-name');
} catch (err) {
  isStorageSupport = false;
}

modalOpen.addEventListener('click', function(evt){
  evt.preventDefault();
  popup.classList.add('modal-open');
  if(storage){
    userName.value = storage;
    userEmail.focus();
  } else {
    userName.focus();
    }
});

close.addEventListener('click', function(evt){
    popup.classList.remove('modal-open');
    popup.classList.remove('modal-error');
});

form.addEventListener('submit', function (evt) {
  if(!userName.value || !userEmail.value || !letter.value){
    evt.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
  } else {
      if(isStorageSupport){
      localStorage.setItem('user-name', userName.value);
      }
    }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('modal-open')) {
      evt.preventDefault();
      popup.classList.remove('modal-open');
      popup.classList.remove('modal-error');
    }
  }
});
