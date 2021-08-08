let navigation = document.querySelector(".main-nav");
let burger = document.querySelector(".main-nav__burger-toggle");

burger.addEventListener("click", function() {

  if(navigation.classList.contains("main-nav--close")) {
    navigation.classList.add("main-nav--open");
    navigation.classList.remove("main-nav--close");
    return;
  }

  if(navigation.classList.contains("main-nav--open")) {
    navigation.classList.add("main-nav--close");
    navigation.classList.remove("main-nav--open");
    return;
  }

});
