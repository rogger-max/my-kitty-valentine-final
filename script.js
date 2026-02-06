// Slide to next page
function nextPage(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Play song then scroll
function playAndNext(id) {
  const song = document.getElementById("song");
  song.play();
  nextPage(id);
}

// Photo slider
let currentSlide = 0;
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Floating hearts animation
for (let i = 0; i < 15; i++) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 20 + Math.random() * 20 + "px";
  heart.innerText = "💖";
  document.body.appendChild(heart);
}
