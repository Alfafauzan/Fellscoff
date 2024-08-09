//toggle
const navbarNav = document.querySelector(".navbar-nav");
// ketika klik garis menu, akan muncul navbar
document.querySelector("#garis-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di mana saja (sidebar), tidak harus di garis menu
const garistiga = document.querySelector("#garis-menu");

document.addEventListener("click", function (e) {
  if (!garistiga.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
