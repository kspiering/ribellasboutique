document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".images-all");
  const playPauseButton = document.getElementById("play");
  const pauseButton = document.getElementById("pause");

  document
    .querySelector(".arrow-container .left")
    .addEventListener("click", moveLeft);

  document
    .querySelector(".arrow-container .right")
    .addEventListener("click", moveRight);

  let isPlaying = true;
  let slideInterval;

  playPauseButton.addEventListener("click", togglePlayPause);

  function moveRight() {
    clearInterval(slideInterval); // Stoppe die automatische Slideshow
    sliderContainer.appendChild(document.querySelector(".slide"));
    if (isPlaying) {
      slideInterval = setInterval(moveRight, 3000); // Starte die automatische Slideshow wieder
    }
  }

  function moveLeft() {
    clearInterval(slideInterval); // Stoppe die automatische Slideshow
    const slides = document.querySelectorAll(".slide");
    sliderContainer.insertBefore(slides[slides.length - 1], slides[0]);
    if (isPlaying) {
      slideInterval = setInterval(moveRight, 3000); // Starte die automatische Slideshow wieder
    }
  }

  function togglePlayPause() {
    isPlaying = !isPlaying;
    if (isPlaying) {
      playPauseButton.textContent = "Pause";
      slideInterval = setInterval(moveRight, 3000);
    } else {
      playPauseButton.textContent = "Play";
      clearInterval(slideInterval);
    }
  }

  // Starte die Slideshow automatisch
  slideInterval = setInterval(moveRight, 3000);
});
