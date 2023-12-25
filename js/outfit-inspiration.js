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
