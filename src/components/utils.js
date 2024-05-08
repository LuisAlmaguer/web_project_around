export const closePopup = (popup) => {
    popup.classList.remove('popup__show');
    document.removeEventListener("keydown", handleCloseOnEscape);
  };
  
  export const openPopup = (popup) => {
    popup.classList.add('popup__show');
    document.addEventListener("keydown", handleCloseOnEscape);
  };

  //

  function handlerImageOpened(title,link){
    const popupImage = document.querySelector('#popup-image');
    elementImageOpened.src = link;
    imageOpened.alt = title;
    titleImageOpened.textContent = title;
    popupImage.classList.toggle('popup__show');
    document.addEventListener("keydown", handlerEscClose);
    popupImage.addEventListener("click", handlerClickOverlay);
  }



//event listeners

