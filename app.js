const nav = document.querySelector(".nav");
const scroll = document.querySelector(".scroll-down");
const volantino = document.querySelector(".volantino");
const linea = document.querySelector("#linea");
const linea1 = document.querySelector("#linea1");
const linea2 = document.querySelector("#linea2");
const preparazione = document.querySelector(".preparazione-scritta");
const spettacolo = document.querySelector(".spettacolo-scritta");

window.addEventListener("scroll", function () {
  nav.classList.toggle("sticky", window.scrollY > 550);
  scroll.classList.toggle("fadeOut", window.scrollY > 500);
  volantino.classList.toggle("volantino-appare", window.scrollY > 500);
  linea.classList.toggle("lineaInfo", window.scrollY > 500);
  linea1.classList.toggle("lineaPrep", window.scrollY > 1100);
  linea2.classList.toggle("lineaSpet", window.scrollY > 1700);
  preparazione.classList.toggle("scritta-appare", window.scrollY > 1100);
  spettacolo.classList.toggle("scritta-appare", window.scrollY > 1700);
});
const next1 = document.querySelector("#next1");
const next2 = document.querySelector("#next2");
const prev1 = document.querySelector("#prev1");
const prev2 = document.querySelector("#prev2");
next1.addEventListener("click", () => {
  plusSlides(1, 0);
});
prev1.addEventListener("click", () => {
  plusSlides(-1, 0);
});
next2.addEventListener("click", () => {
  plusSlides(1, 1);
});
prev2.addEventListener("click", () => {
  plusSlides(-1, 1);
});
var slideIndex = [1, 1];
var slideId = ["mySlides1", "mySlides2"];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
