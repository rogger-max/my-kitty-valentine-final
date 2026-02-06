// Scroll to next page smoothly
function nextPage(id) {
  const page = document.getElementById(id);
  page.scrollIntoView({ behavior: "smooth" });
}

// Play song then scroll
function playAndNext(id) {
  const song = document.getElementById("song");
  if (song.paused) {
    song.play();
  }
  nextPage(id);
}
