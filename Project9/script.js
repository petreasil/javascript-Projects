const navbarBtn = document.querySelector(".navbar_btn");
const navbarLinks = document.querySelector(".navbar_links");

navbarBtn.addEventListener("click", function() {
  let value = navbarLinks.classList.contains("navbar_collapse");
  if (value) {
    navbarLinks.classList.remove(".navbar_collapse");
  } else {
    navbarLinks.classList.add(".navbar_collapse");
  }
});
