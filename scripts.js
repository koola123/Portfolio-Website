let tablinks = document.querySelectorAll(".tab-links");
let tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

const sideMenu = document.getElementById("sidemenu");
const closeButton = document.querySelector(".close-button");
const openButton = document.querySelector(".open-button");

openButton.addEventListener("click", showMenu);
closeButton.addEventListener("click", hideMenu);

function showMenu() {
  sideMenu.classList.add("show");
}

function hideMenu() {
  sideMenu.classList.remove("show");
}
