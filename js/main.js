document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.getElementById("burger-icon");
  const menu = document.getElementById("mobile-nav-content");
  const closeBtn = document.getElementById("exit");

  burgerIcon.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  closeBtn.addEventListener("click", function () {
    menu.classList.remove("show");
  });
});
