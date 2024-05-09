export class Popup {
    contructor(popupElement){
        this.popupElement = document.querySelector(popupElement);
        this.popupCloseButton = this.popupElement.querySelector('.popup__button-close');
        this._handlerCloseEsc = this._handlerCloseEsc.bind(this);
    }

    open(){
        this.popupElement.classList.add('popup__show');
        document.addEventListener("keydown", this._handlerCloseEsc);
    }
    close(){
        this.popupElement.classList.remove('popup__show');
        document.removeEventListener("keydown", this._handlerCloseEsc);
    }

    _handlerCloseEsc(e){
        if(e.key === "Escape"){
            this.close();
          }
        }

    _handlerClickOutside(e){
        return evt.target.classList.contains('popup__overlay')
    }

    setEvenListeners(){
        this.popupCloseButton.addEventListener("click", () => {
            this.close();
        });

        this.popupElement.addEventListener("click", () =>{
            if (this._handlerClickOutside){
                this.close();
            }
        })
    }
}