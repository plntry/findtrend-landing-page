document.addEventListener("DOMContentLoaded", function () {
  // Toggle Mobile Menu
  const mobileMenuToggleBtn = document.querySelector(
    ".navbar__toggle-mobile-menu"
  );
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");

  mobileMenuToggleBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("navbar__mobile-menu-items--active");
  });
});

// Change navbar bg color on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar--scroll");
  } else {
    navbar.classList.remove("navbar--scroll");
  }
});
