var navButton = document.querySelector(".main-navigation__toggle");
var navMenu = document.querySelector(".main-navigation");

navButton.addEventListener("click", function() {
  if (navButton.classList.contains("main-navigation__toggle")) {
    navButton.classList.remove("main-navigation__toggle");
    navButton.classList.add("main-navigation__toggle");
    navMenu.classList.remove("site-list--closed");
    navMenu.classList.add("site-list--opened");
  } else {
    navButton.classList.remove("main-navigation__toggle");
    navButton.classList.add("main-navigation__toggle");
    navMenu.classList.remove("site-list--opened");
    navMenu.classList.add("site-list--closed");
  }
})

navButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  navMenu.classList.toggle("main-navigation__show");
});

navButton.addEventListener("dbclick", function (evt) {
  evt.preventDefault();
  navMenu.classList.toggle(".main-navigation");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (navMenu.classList.contains("main-navigation__show")) {
      navMenu.classList.remove("main-navigation__show");
    }
  }
});
