document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar");

  function updateNavbar() {
    if (window.innerWidth <= 992) {
      // Mobile view: Set white background
      navbar.classList.add("scrolled");
      navbar.classList.remove("transparent");
    } else {
      // Desktop view: Adjust based on scroll position
      if (window.scrollY > 95) {
        navbar.classList.add("scrolled");
        navbar.classList.remove("transparent");
      } else {
        navbar.classList.remove("scrolled");
        navbar.classList.add("transparent");
      }
    }
  }

  // Initial setup
  updateNavbar();

  window.addEventListener("scroll", function () {
    // Update on scroll
    updateNavbar();
  });

  window.addEventListener("resize", function () {
    // Update on window resize
    updateNavbar();
  });
});
