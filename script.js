//Grabing the DOM elements

const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

//Toggle nav
toggle.addEventListener("click", () => {
  //Toggle the show-nav clas on click on the nav menu btn
  document.body.classList.toggle("show-nav");
});

//Show moadal
open.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

//Hide modal
close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

//Hide modal on outside click
window.addEventListener("click", e => {
  //if the target of clicking is outside the modal than remove the calass else false
  e.target == modal ? modal.classList.remove("show-modal") : false;
});
