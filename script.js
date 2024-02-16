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
const likeElement = document.querySelector('.element__like');

const addButton = document.querySelector('.profile__add-button');
const popupElement = document.querySelector('#popup-element');

const closeButtonEdit = popupProfile.querySelector('.popup__button-close');
const submitButtonEdit = popupProfile.querySelector('.popup__submit');

const closeButtonAdd = popupElement.querySelector('.popup__button-close');


const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formProfile = popupProfile.querySelector('.popup__form-profile');
const inputName = formProfile.querySelector('.popup__input[name="name"]');
const inputJob = formProfile.querySelector('.popup__input[name="job"]');

// const elementName = document.querySelector('.element__text');
// const elementImage = document.querySelector('.element__image');
// const formElement = popupElement.querySelector('.popup__form-element');

//crear cards desde plantilla y array
const templateElement = document.querySelector('.template-element');
const cardArea = document.querySelector('.elements');

//funciones

function togglePopupEdit(popup){
  popup.classList.toggle('popup__show');
}

function togglePopupAdd(popup){
  popup.classList.toggle('popup__show');
}


function createElement(title, link){
  const element = templateElement.cloneNode(true).content.querySelector('.element');
  const elementImage = element.querySelector('.element__image');
  const elementTitle = element.querySelector('.element__text');
  elementImage.src = link;
  elementTitle.textContent = title;
  return element;
}

initialCards.forEach(function(item){
  const newElement = createElement(item.name, item.link);
  cardArea.append(newElement);
})


// cardArea.append(elementClone);

// createElement();
// function createElement(item){
//   const node= document.createElement('div');
//   const nodeImage= document.createElement('img');
//   const nodeInfo= document.createElement('div');
//   const nodeText= document.createElement('p');
//   const nodeLike= document.createElement('button');
//   const nodeTrash= document.createElement('button');
//   nodeImage.classList.add('element__image');
//   nodeInfo.classList.add('element__info');
//   nodeText.classList.add('element__text');
//   nodeLike.classList.add('element__like');
//   nodeTrash.classList.add('element__trash');
//   node.classList.add('element');
//   nodeImage.src=item.link;
//   nodeText.textContent=item.text;
//   node.append(nodeText);
//   node.append(nodeImage);
//   return node;

// }


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
  // const node = createElement(item);
  // elements.append(node);
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