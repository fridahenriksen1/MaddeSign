// Toggle till footer mobile

const collapsibles = document.querySelectorAll(".collapsible");

//! Funktionen som gör att det laddas varje sekund, ifall användaren drar i footern
let vw = window.innerWidth;
// function refreshVW(x){
//   vw = window.innerWidth;
//   console.log(vw);
// };
// setInterval(refreshVW, 1000);

collapsibles.forEach((collapsible) => {
  const btn = collapsible.querySelector(".collapsible-btn");
  const content = collapsible.querySelector(".collapsible-content");

  btn.addEventListener("click", () => {
    console.log(vw);
    if (vw <= 768){
    content.classList.toggle("active");
  } else{}
  });
});



// Access DOM element object

// const rotated = document.getElementById("rotated");

// function rotateImage() {
//   // Rotate image by 90 degrees clockwise

//   rotated.style.transform = "rotate(180deg)";
// }






// JS till collapsible pilarna så att de roterar upp och ner

const rotated = document.getElementById("rotated");
const rotateSecondBtn = document.getElementById("rotatedTwo");

// Variable to hold the current angle of rotation

let rotation = 0;

// How much to rotate the image at a time

const angle = 180;

function rotateImage() {
  // Ensure angle range of 0 to 359 with "%" operator,

  // e.g., 450 -> 90, 360 -> 0, 540 -> 180, etc.

  rotation = (rotation + angle) % 360;

  rotated.style.transform = `rotate(${rotation}deg)`;

}
function rotateImageTwo() {
  // Ensure angle range of 0 to 359 with "%" operator,

  // e.g., 450 -> 90, 360 -> 0, 540 -> 180, etc.

  rotation = (rotation + angle) % 360;

  rotatedTwo.style.transform = `rotate(${rotation}deg)`;
}

//nav-knappar
const navToggle = document.querySelector(".navToggle");
const mobileScreen = document.querySelector(".mobileLinks");
const navClose = document.querySelector(".closeButton");
navToggle.addEventListener("click", () => {
  mobileScreen.classList.add("active");
});
navClose.addEventListener("click", () => {
  mobileScreen.classList.remove("active");
});

var coll = document.getElementsByClassName("collapsibleMenu");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos < currentScrollPos) {
    document.querySelector(".navContainer").classList.add("scrolledAway");
  } else {
    document.querySelector(".navContainer").classList.remove("scrolledAway");
  }
  prevScrollpos = currentScrollPos;
}

let totalBought = localStorage.getItem('totalBought');
function loadBought(){
  console.log(totalBought);
  if (totalBought == null){
    totalBought = 0;
    document.querySelector(".varuCount").classList.remove("active");
    document.querySelector(".varuCount_mobile").classList.remove("active");
  }
  if (totalBought > 0){
    document.querySelector(".varuCount").classList.add("active");
    document.querySelector(".varuCount").innerHTML = totalBought;
    document.querySelector(".varuCount_mobile").classList.add("active");
    document.querySelector(".varuCount_mobile").innerHTML = totalBought;
  }
}
window.onload = loadBought();