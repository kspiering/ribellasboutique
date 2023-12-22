document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.getElementById("burger-icon");
  const navList = document.getElementById("mobile-nav-content");

  burgerIcon.addEventListener("click", function () {
    navList.classList.toggle("show");
  });
});
