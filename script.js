// variables

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

const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup__content-edit');

const addButton = document.querySelector('.profile__add-button');
const popupElement = document.querySelector('.popup__content-add');

const closeButtonEdit = popupProfile.querySelector('.popup__button-close');
const submitButtonEdit = popupProfile.querySelector('.popup__submit');

const closeButtonAdd = popupElement.querySelector('.popup__button-close');


const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formProfile = popupProfile.querySelector('.popup__form-profile');
const inputName = formProfile.querySelector('.popup__input[name="name"]');
const inputJob = formProfile.querySelector('.popup__input[name="job"]');

const elementName = document.querySelector('.element__text');
const elementImage = document.querySelector('.element__image');
const formElement = popupElement.querySelector('.popup__form-element');
// const inputElement = formElement.querySelector('.popup__input[name="element"]');
// const inputImage = formElement.querySelector('.popup__input[name="image"]');
const inputElement = initialCards.map(function(element, index){
  return `${element.name}`;
});

// const inputImage = formElement.querySelector('image')).setAttribute("src", "" );

//funciones

function togglePopupEdit(popup){
  popup.classList.toggle('popup_content_edit');
}

function togglePopupAdd(popup){
  popup.classList.toggle('popup_content_add');
}


//event listeners

editButton.addEventListener('click', function(){
  togglePopupEdit(popupProfile);
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
});

closeButtonEdit.addEventListener('click', function(){
  togglePopupEdit(popupProfile);
});

addButton.addEventListener('click', function(){
  togglePopupAdd(popupElement);
  inputElement.value = elementName.textContent;
  inputImage.value = elementImage.textContent;
});

closeButtonAdd.addEventListener('click', function(){
  togglePopupAdd(popupElement);
});

formProfile.addEventListener('submit', function(event){
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  formProfile.reset();
  togglePopupEdit(popupProfile);
})