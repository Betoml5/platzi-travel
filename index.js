const btnMobile = document.querySelector("#btnDarkMobile");
const btnDesktop = document.querySelector("#btnDarkDesktop");

const $div = document.querySelector("div");
const $main = document.querySelector("main");
const $sections = document.querySelectorAll("section");
const $body = document.querySelector("body");
const $h3 = document.querySelectorAll("h3");
const $h4 = document.querySelectorAll("h4");
const $faq = document.querySelector("#faq");
const $pFaq = $faq.querySelectorAll("p");
const $h3Faq = $faq.querySelectorAll("h4");
const $desktopNav = document.querySelector("#desktopNav");
const $desktopNavLi = $desktopNav.querySelectorAll("ul li");
const $desktopNavP = document.querySelector("p");
const $carrouselCards = document.querySelector("#carrousel-cards");
const $tredingSection = document.querySelector("#treding-section");
btnMobile.addEventListener("click", handleDarkMode);
btnDesktop.addEventListener("click", handleDarkMode);

function handleDarkMode() {
  $pFaq.forEach((item) => item.classList.toggle("darkText"));
  $sections.forEach((item) => item.classList.toggle("darkBackground"));
  $carrouselCards.querySelector("h3").classList.toggle("darkText");
  $tredingSection.querySelector("h3").classList.toggle("darkText");
  $faq.querySelector("h3").classList.toggle("darkText");
  $h3Faq.forEach((item) => item.classList.toggle("darkText"));
  $main.classList.toggle("darkBackground");
  $div.classList.toggle("darkBackground");
  $body.classList.toggle("darkBackground");
  $desktopNavP.classList.toggle("darkText");
  $desktopNavLi.forEach((item) => item.classList.toggle("darkText"));
}
