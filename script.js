// variables
const elements = document.querySelector('.elements');
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
const popupProfile = document.querySelector('#popup-profile');

const addButton = document.querySelector('.profile__add-button');
const popupElement = document.querySelector('#popup-element');

const closeButtonEdit = popupProfile.querySelector('.popup__button-close');

const closeButtonAdd = popupElement.querySelector('.popup__button-close');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formProfile = popupProfile.querySelector('.popup__form');
const inputName = formProfile.querySelector('.popup__input[name="name"]');
const inputJob = formProfile.querySelector('.popup__input[name="job"]');

const elementName = document.querySelector('.element__text');
const elementImage = document.querySelector('.element__image');
const formElement = popupElement.querySelector('.popup__form');
const inputTitle = formElement.querySelector('.popup__input[name="title"]');
const inputImage = formElement.querySelector('.popup__input[name="image"]');

const popupImage = document.querySelector('#popup-image');
const closeButtonImage = popupImage.querySelector('.popup__button-close');
//crear cards desde plantilla y array
const templateElement = document.querySelector('.template-element');
const cardArea = document.querySelector('.elements');

//funciones


// function togglePopup(popup){
//   popup.classList.toggle('popup__show');
// }

const closePopup = (popup) => {
  popup.classList.remove('popup__show');
  document.removeEventListener("keydown", handleCloseOnEscape);
};

const openPopup = (popup) => {
  popup.classList.add('popup__show');
  document.addEventListener("keydown", handleCloseOnEscape);
};


function createElement(title, link){
  const element = templateElement.cloneNode(true).content.querySelector('.element');
  const elementImage = element.querySelector('.element__image');
  const elementTitle = element.querySelector('.element__text');
  const elementLiked = element.querySelector('.element__like');
  const elementTrash = element.querySelector('.element__trash');
  const elementImageOpened = element.querySelector('.element__image');
  const imageOpened = popupImage.querySelector('.popup__image-opened');
  const titleImageOpened = popupImage.querySelector('.popup__image-title');
  elementImage.src = link;
  elementImage.alt = title;
  elementTitle.textContent = title;
  elementLiked.addEventListener('click', function(){
    elementLiked.classList.toggle('element__liked');
  })
  elementTrash.addEventListener('click', function(){
    element.remove();
  })
  elementImageOpened.addEventListener('click', function(){
    popupImage.classList.toggle('popup__show');
    imageOpened.src = link;
    imageOpened.alt = title;
    titleImageOpened.textContent=title;
  })
  return element;
}

initialCards.forEach(function(item){
  const newElement = createElement(item.name, item.link);
  cardArea.append(newElement);
})


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

function handleCloseOnEscape(e){
  if(e.key== "Escape"){
    popupProfile.classList.remove('popup__show');
    popupElement.classList.remove('popup__show');
    popupImage.classList.remove('popup__show');
  }
}

//

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
  const newCard = createElement(inputTitle.value, inputImage.value);
  cardArea.prepend(newCard);
  formElement.reset();
  closePopup(popupElement);
});