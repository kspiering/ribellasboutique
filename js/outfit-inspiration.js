document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".images-all");

  document
    .querySelector(".arrow-container .left")
    .addEventListener("click", moveLeft);

  document
    .querySelector(".arrow-container .right")
    .addEventListener("click", moveRight);

  let currentSlide = 1;

  function moveRight() {
    sliderContainer.append(document.querySelectorAll(".slide")[0]);
  }

  function moveLeft() {
    const arrayLength = document.querySelectorAll(".slide").length;

    sliderContainer.prepend(
      document.querySelectorAll(".slide")[arrayLength - 1]
    );
  }
});

function togglePlayPause() {
  var playIcon = document.getElementById("play");
  var pauseIcon = document.getElementById("pause");

  if (playIcon.style.display === "none") {
    playIcon.style.display = "inline";
    pauseIcon.style.display = "none";
    // Hier kannst du die Logik hinzufügen, um die Wiedergabe zu pausieren.
  } else {
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline";
    // Hier kannst du die Logik hinzufügen, um die Wiedergabe fortzusetzen.
  }
}
