// variables

const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_content_edit-profile');
const closeButton = popupProfile.querySelector('.popup__button-close');
const submitButtonEdit = popupProfile.querySelector('.popup__submit');
// const addButton = document.querySelector('.profile__add-button');
// const likeButton = document.querySelector('.element__like');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formProfile = popupProfile.querySelector('.popup__form');
const inputName = formProfile.querySelector('.popup__input[name="name"]');
const inputJob = formProfile.querySelector('.popup__input[name="job"]');
//funciones

function togglePopup(popup){
    popup.classList.toggle('popup__show');
}

//event listeners

editButton.addEventListener('click', function(){
    togglePopup(popupProfile);
    inputName.value =profileName.textContent;
    inputJob.value = profileJob.textContent;
});

closeButton.addEventListener('click', function(){
    togglePopup(popupProfile);
});

formProfile.addEventListener('submit', function(event){
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    formProfile.reset();
    togglePopup(popupProfile);
})