export class Card{
  constructor(name, link, template, handlerImageOpened){
    this._name = name;
    this._link = link;
    this._template = template;
    this._handlerImageOpened = handlerImageOpened;
  }

  _getTemplate(){
    this._element = this._template.cloneNode(true).content.querySelector('.element');
    return this._element;
  }

  _setCardProperties(){
    this.elementImage = this._element.querySelector('.element__image');
    this.elementTitle = this._element.querySelector('.element__text');
    this.elementLiked = this._element.querySelector('.element__like');
    this.elementTrash = this._element.querySelector('.element__trash');

    this.elementImageOpened = this._element.querySelector('.element__image');
    this.imageOpened = document.querySelector('.popup__image-opened');
    this.titleImageOpened = document.querySelector('.popup__image-title');
    this.popupImage = document.querySelector('#popup-image');

    this.elementTitle.textContent = this._name;
    this.elementImage.src = this._link;
    this.elementImage.alt = this._name;
  }

  setEventListeners(){
    this.elementTrash.addEventListener("click", () => {
      this._handlerRemoveCard();
    })
    this.elementLiked.addEventListener("click", () => {
      this._handlerLikedCard();
    })
    this.elementImageOpened.addEventListener("click", () => {
      this._handlerOpenImage(this._name, this._link);
    })  
  
}

  _handlerRemoveCard(){
    this._element.remove();
  };

  _handlerLikedCard(){
    this.elementLiked.classList.toggle('element__liked');
  };

  _handlerOpenImage(){
    this.imageOpened.src = this._link;
    this.imageOpened.alt = this._name;
    this.titleImageOpened.textContent = this._name;
    this.popupImage.classList.toggle('popup__show');    
  }

  generateCard(){
    this._getTemplate();
    this._setCardProperties();
    this.setEventListeners();
    return this._element;
    }
 }