// const sliderContainer = document.querySelector(".image-winter1");

// // select the two buttons with the arrows and addd an eventListener
// // event listener for the left button
// document
//   .querySelector(".arrow-winter-left .left")
//   .addEventListener("click", moveLeft);
// // event listener for the right button
// document
//   .querySelector(".arrow-winter-right .right")
//   .addEventListener("click", moveRight);

// // we will implement the current slide counter
// // this variable will be changed every time we move to the left or right
// // it gets incrementer or decremented
// let currentSlide = 1;

// // Now we will define the functions to move the pictures
// // The first one will be the moveRight function
// // since we are moving to the right, we need to get the first slide
// // and out it at the end of the container
// function moveRight() {
//   // here we take the first element of our array (slide)
//   // and append it (add it to the end of the array) in the slider container
//   sliderContainer.append(document.querySelectorAll(".image-winter1")[0]);
// }

// function moveLeft() {
//   // here we calculate the length of the array
//   // and store it in a variable
//   const arrayLength = document.querySelectorAll(".image-winter1").length;
//   // and prepend it (add it to the beginning of the array) in the slider container
//   // since the length is one more than the last index, we need to subtract 1
//   sliderContainer.prepend(
//     document.querySelectorAll(".image-winter1")[arrayLength - 1]
//   );
// }

const sliderContainer = document.querySelector(".image-winter1");
const slides = document.querySelectorAll(".image-winter1");
const leftButton = document.querySelector(
  ".winter .images-winter .image-winter-right .arrow-winter-left.left"
);
const rightButton = document.querySelector(
  ".winter .images-winter .image-winter-right .arrow-winter-right .right"
);

// Add event listeners
leftButton.addEventListener("click", moveLeft);
rightButton.addEventListener("click", moveRight);

let currentSlide = 1;

function moveRight() {
  sliderContainer.append(slides[0]);
  updateCurrentSlide(1);
}

function moveLeft() {
  const arrayLength = slides.length;
  sliderContainer.prepend(slides[arrayLength - 1]);
  updateCurrentSlide(-1);
}

function updateCurrentSlide(direction) {
  currentSlide += direction;

  // You can use currentSlide for something if needed
  console.log("Current Slide:", currentSlide);
}
