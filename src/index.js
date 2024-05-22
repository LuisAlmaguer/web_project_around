import '../src/styles/index.css';

import { Card } from "./script/Card.js";
import { FormValidator } from "./script/FormValidator.js";
import { Section } from "./script/Section.js";
import{
  openPopup, closePopup
} from "./components/utils.js";


// variables

const numbers = [2, 3, 5];

// Función arrow. ¿Cómo se las arreglará Internet Explorer?
const doubledNumbers = numbers.map(number => number * 2); 

console.log(doubledNumbers); // 4, 6, 10

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
]; 

const sectionCards = new Section(
  {
  items: initialCards,
  renderer: function(){},
  }, 
  'elements');


const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('#popup-profile');

const addButton = document.querySelector('.profile__add-button');
const popupElement = document.querySelector('#popup-element');

const popupImage = document.querySelector('#popup-image');

const closeButtonEdit = popupProfile.querySelector('.popup__button-close');

const closeButtonAdd = popupElement.querySelector('.popup__button-close');

const closeButtonImage = popupImage.querySelector('.popup__button-close');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formProfile = popupProfile.querySelector('.popup__form');
const inputName = formProfile.querySelector('.popup__input[name="name"]');
const inputJob = formProfile.querySelector('.popup__input[name="job"]');

const formElement = popupElement.querySelector('.popup__form');
const inputTitle = formElement.querySelector('.popup__input[name="title"]');
const inputImage = formElement.querySelector('.popup__input[name="image"]');

//crear cards desde plantilla y array
const templateElement = document.querySelector('.template-element');
const cardArea = document.querySelector('.elements');


initialCards.forEach(function(item){
  const newElement = new Card(item.name, item.link, templateElement);
  sectionCards.addItem(newElement.generateCard());
});

const settings ={
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__button-disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};


//event listeners

editButton.addEventListener('click', function(){
  openPopup(popupProfile);
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
});

closeButtonEdit.addEventListener('click', function(){
  closePopup(popupProfile);
});

addButton.addEventListener('click', function(){
  formProfile.reset();
  openPopup(popupElement);
});

closeButtonAdd.addEventListener('click', function(){
  closePopup(popupElement);
});

closeButtonImage.addEventListener('click', function(){
  closePopup(popupImage);
});

//tecla ESC   

function handlerCloseEsc(e) {
  if(e.key== "Escape"){
    popupProfile.classList.remove('popup__show');
    popupElement.classList.remove('popup__show');
    popupImage.classList.remove('popup__show');
  }
}
document.addEventListener("keydown",handlerCloseEsc);
//click fuera de popup

popupProfile.addEventListener('click', function(evt){
  if (evt.target.classList.contains('popup__overlay')){
    closePopup(popupProfile);
  }
});

popupElement.addEventListener('click', function(evt){
  if (evt.target.classList.contains('popup__overlay')){
    closePopup(popupElement);
  }
});

popupImage.addEventListener('click', function(evt){
  if (evt.target.classList.contains('popup__overlay')){
    closePopup(popupImage);
  }
});


formProfile.addEventListener('submit', function(event){
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  formProfile.reset();
  closePopup(popupProfile);
});

formElement.addEventListener('submit', function(event){
  event.preventDefault();
  const newElement = new Card(inputTitle.value, inputImage.value, templateElement);
  sectionCards.addItem(newElement.generateCard());
  formElement.reset();
  closePopup(popupElement);
});

const validateFormProfile = new FormValidator(formProfile, settings);
validateFormProfile._setEventListeners();
const validateFormElement = new FormValidator(formElement, settings);
validateFormElement._setEventListeners();


sectionCards.addItem(element);