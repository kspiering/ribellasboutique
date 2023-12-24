const sliderContainer = document.querySelector(".slider");

// select the two buttons with the arrows and addd an eventListener
// event listener for the left button
document
  .querySelector(".arrow-container .left")
  .addEventListener("click", moveLeft);
// event listener for the right button
document
  .querySelector(".arrow-container .right")
  .addEventListener("click", moveRight);

// we will implement the current slide counter
// this variable will be changed every time we move to the left or right
// it gets incrementer or decremented
let currentSlide = 1;

// Now we will define the functions to move the pictures
// The first one will be the moveRight function
// since we are moving to the right, we need to get the first slide
// and out it at the end of the container
function moveRight() {
  // here we take the first element of our array (slide)
  // and append it (add it to the end of the array) in the slider container
  sliderContainer.append(document.querySelectorAll(".slide")[0]);
}

function moveLeft() {
  // here we calculate the length of the array
  // and store it in a variable
  const arrayLength = document.querySelectorAll(".slide").length;
  // and prepend it (add it to the beginning of the array) in the slider container
  // since the length is one more than the last index, we need to subtract 1
  sliderContainer.prepend(document.querySelectorAll(".slide")[arrayLength - 1]);
}
