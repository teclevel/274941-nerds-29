const modalOpen = document.querySelector('.contact-button');
const letterPopup = document.querySelector('.modal-contact');
const modalClose = letterPopup.querySelector('.modal-close');
const letterForm = letterPopup.querySelector('.fill-form');
const userName = letterPopup.querySelector('.user-name');
const userEmail = letterPopup.querySelector('.user-email');
const userLetter = letterPopup.querySelector('.user-letter');

var cardSite=document.querySelector('.card-site');
var fieldPrice=cardSite.querySelector('.field-price');

cardSite.addEventListener('mouseover', function(evt){
fieldPrice.classList.add('field-price-show');
console.log("навел мышкой");
});
cardSite.addEventListener('mouseout', function(evt){
fieldPrice.classList.remove('field-price-show');
console.log("нет мышки");
});



let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('user-name');
} catch (err) {
  isStorageSupport = false;
}

modalOpen.addEventListener('click', function(evt){
  evt.preventDefault();
  letterPopup.classList.add('modal-open');

  if(storage){
    userName.value = storage;
    userEmail.focus();
  } else {
    userName.focus();
    }
});


modalClose.addEventListener('click', function(evt){
    letterPopup.classList.remove('modal-open');
    letterPopup.classList.remove('modal-error');
});


letterForm.addEventListener('submit', function (evt) {
    if(!userName.value || !userEmail.value || !userLetter.value){
      evt.preventDefault();
      letterPopup.classList.remove('modal-error');
      letterPopup.offsetWidth = letterPopup.offsetWidth;
      letterPopup.classList.add('modal-error');
    } else {
      if(isStorageSupport){
        localStorage.setItem('user-name', userName.value);
      }
  }
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (letterPopup.classList.contains('modal-open')) {
      evt.preventDefault();
      letterPopup.classList.remove('modal-open');
      letterPopup.classList.remove('modal-error');
    }
  }
});
