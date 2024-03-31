let elementWhatsApp = document.getElementById("logo-whatsapp");
addEventListener("scroll", function () {
  if (window.pageYOffset > originalTop) {
    elementWhatsApp.style.position = "fixed";
    elementWhatsApp.style.top = "84%";
  } else {
    elementWhatsApp.style.position = "absolute";
    elementWhatsApp.style.top = "84%";
  }
});
