var tourButton = document.querySelector(".catalog-cruises__item--sea");
var modalPopup = document.querySelector(".modal-popup");
var close = document.querySelector(".modal-popup__cross");

tourButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-popup__show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalPopup.classList.remove("modal-popup__show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalPopup.classList.contains("modal-popup__show")) {
      modalPopup.classList.remove("modal-popup__show");
    }
  }
});
