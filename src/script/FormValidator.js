export class FormValidator{
    constructor(formElement, settings){
        this._formElement = formElement;
        this._formSelector = settings.formSelector;
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings._inputErrorClass;
        this._errorClass = settings.errorClass;
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._formList = Array.from(this._formElement.querySelectorAll(this._formSelector));
        this._inputList = Array.from(this._formElement
            .querySelectorAll(this._inputSelector));
        this._setEventListeners();
    }

    _showInputError(inputElement, errorMessage){
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    }

    _hideInputError(inputElement, errorMessage){
        inputElement.classList.remove(this._inputErrorClass);
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.classList.remove(errorMessage);
        errorElement.textContent = "";
    }

    _checkInputValidity(inputElement){
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
          } else {
            this._hideInputError(inputElement);
          }
    }

    _hasInvalidInput(){
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
          });
    }

    _toggleButtonState(){
        if (this._hasInvalidInput(this._inputList)) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
          } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
          }
    }
    _setEventListeners(){
        this._formElement.addEventListener("submit", (evt) =>{
            evt.preventDefault();
        });
        this._inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState();
        });
        });
    }

    enableValidation(){
        this._setEventListeners();
    }
    }