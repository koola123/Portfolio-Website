/* Hamburger menu */
$(document).ready(function () {
  $(".sidemenu").click(function () {
    $(".main-nav ul.main-menu").toggleClass("show");
    $(".sidemenu .top").toggleClass("sidemenu.line-top");
    $(".sidemenu .center").toggleClass("sidemenu.line-center");
    $(".sidemenu .bottom").toggleClass("sidemenu.line-bottom");
  });
});

/* Scroll to top fn */
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  } 
});

