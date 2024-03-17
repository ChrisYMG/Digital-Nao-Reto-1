// @author: Christian Yael Mejía Galindo.
// @param: {link}

// Selecciona todos los elementos con la clase ".nav-link"
document.querySelectorAll(".nav-link").forEach((link) => {
  // A cada elemento seleccionado, se le añade un evento de click
  link.addEventListener("click", function () {
    // Selecciona todos los elementos con la clase ".nav-link"
    document
      .querySelectorAll(".nav-link")
      // A cada elemento seleccionado, se le remueve la clase "active"
      .forEach((navLink) => navLink.classList.remove("active"));
    // Al elemento que se le hizo click, se le añade la clase "active"
    this.classList.add("active");
  });
});
