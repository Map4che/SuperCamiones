const line = document.getElementById("toggle__line");
const toggle = document.getElementById("toggle");
const check = document.getElementById("check");
const menu = document.getElementById("fixed-element");

function toggleMenuByResize() {
  const screenSize = window.innerWidth;
  if (screenSize < 720) {
    toggle.children[0].style.transform = "none";
    toggle.children[1].style.opacity = 1;
    toggle.children[2].style.transform = "none";
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

function toggleMenu() {
  if (check.checked == true) {
    toggle.children[0].style.transform = "none";
    toggle.children[1].style.opacity = 1;
    toggle.children[2].style.transform = "none";
    menu.style.display = "none";
  } else {
    toggle.style.transition = "all 0.3s";
    toggle.children[0].style.transform = "rotate(45deg) translate(10px, 10px)";
    toggle.children[1].style.opacity = 0;
    toggle.children[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    menu.style.display = "flex";
  }
}

toggle.addEventListener("click", toggleMenu);
window.addEventListener("resize", toggleMenuByResize);
