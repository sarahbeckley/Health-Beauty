function loadAllEventListeners() {
  window.addEventListener("DOMContentLoaded", hideSubSections);
  document
    .querySelector("#supplements-btn")
    .addEventListener("mouseenter", showSupplements);
  document
    .querySelector("#equipment-btn")
    .addEventListener("mouseenter", showEquipment);
  document
    .querySelector("#makeup-btn")
    .addEventListener("mouseenter", showMakeup);
  document
    .querySelector("#supplements-btn")
    .addEventListener("mouseleave", hideSupplements);
  document
    .querySelector("#equipment-btn")
    .addEventListener("mouseleave", hideEquipment);
  document
    .querySelector("#makeup-btn")
    .addEventListener("mouseleave", hideMakeup);
}

function showSupplements(e) {
  document.querySelector(".dropdown-content-supplements").style.display =
    "block";
  event.preventDefault();
}

function showEquipment(e) {
  document.querySelector(".dropdown-content-equipment").style.display = "block";
  event.preventDefault();
}

function showMakeup(e) {
  document.querySelector(".dropdown-content-makeup").style.display = "block";
  event.preventDefault();
}

function hideSupplements(e) {
  document.querySelector(".dropdown-content-supplements").style.display =
    "none";
  event.preventDefault();
}

function hideEquipment(e) {
  document.querySelector(".dropdown-content-equipment").style.display = "none";
  event.preventDefault();
}

function hideMakeup(e) {
  document.querySelector(".dropdown-content-makeup").style.display = "none";
  event.preventDefault();
}

function hideSubSections(e) {
  document.querySelector(".dropdown-content-supplements").style.display =
    "none";
  document.querySelector(".dropdown-content-equipment").style.display = "none";
  document.querySelector(".dropdown-content-makeup").style.display = "none";
  event.preventDefault();
}

loadAllEventListeners();
