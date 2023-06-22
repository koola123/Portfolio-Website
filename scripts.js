const darkButton = document.getElementById("dark-btn");
const btnText = document.getElementById("btnText");
// btnText.style.color = "#cccc00";
btnText.style.fontSize ="1.1rem";
const btnIcon = document.getElementById("btnIcon");

  darkButton.addEventListener("click", toggleThemeColor);

  function toggleThemeColor() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
      btnIcon.src = "images/sun_icon.svg";
      btnText.textContent= "Light";
    } else {
      btnIcon.src = "images/moon_icon.svg";
      btnText.textContent = "Dark";
    }
  };

window.addEventListener("scroll", function() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 550);
});

function opentab(tabname) {
  let tablinks = document.querySelectorAll(".tab-links");
  let tabcontents = document.querySelectorAll(".tab-contents");
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
};

const sideMenu = document.getElementById("sidemenu");
const closeButton = document.querySelector(".close-button");
const openButton = document.querySelector(".open-button");

openButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  let sideMenu = document.getElementById("sidemenu");
  sideMenu.classList.toggle("show");
};

function hideMenu() {
  let sideMenu = document.getElementById("sidemenu");
  sideMenu.classList.remove("show");
};

sideMenu.addEventListener("click", (e) => {
  let target = e.target;
  if (target === sideMenu) {
    sideMenu.classList.remove("show");
  }
});

window.addEventListener("keydown", (e) => {
  let sideMenu = document.getElementById("sidemenu");
  if (e.key === "Escape" && sideMenu.classList.contains("show")) {
    hideMenu();
  }
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000);
};
