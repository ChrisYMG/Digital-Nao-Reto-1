// Código JavaScript para manejar la navegación
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelectorAll(".nav-link")
      .forEach((navLink) => navLink.classList.remove("active"));
    this.classList.add("active");
    document
      .querySelectorAll("section")
      .forEach((section) => (section.style.display = "none"));
    document.querySelector(this.getAttribute("href")).style.display = "block";
  });
});
