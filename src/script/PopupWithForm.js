import { Popup } from "./Popup";
import { Card } from "./Card";

export class PopupWithForm extends Popup {
    constructor(handlerFormSubmit, popupSelector){
        super(popupSelector);
        this.handlerFormSubmit = handlerFormSubmit;
    }

_getInputValues(){
        profileName.textContent = inputName.value;
        profileJob.textContent = inputJob.value;
}

setEvenListeners(){
    super.setEvenListeners();
    this.popupElement.addEventListener("submit", (evt)=>{
        evt.preventDefault();
        this.handlerFormSubmit();
    })
}

handlerFormSubmit(){
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
        cardArea.prepend(newElement.generateCard());
        formElement.reset();
        closePopup(popupElement);
      });
}
}


//lamar a popupwithForm
// const addCardPopUp = new PopupWithForm(()=> {}, '#popup-profile');
// const addCardPopUp = new PopupWithForm(()=> {}, '#popup-element');