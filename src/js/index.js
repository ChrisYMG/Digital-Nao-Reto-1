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

// Función anónima para la validación del formulario
(() => {
  "use strict";

  // Obtener el formulario para aplicar estilos de validación Bootstrap personalizados
  let forms = document.querySelectorAll(".needs-validation");

  // Bucle sobre los campos
  Array.from(forms).forEach(form => {
    form.addEventListener(
      "submit",
      event => {
        // Si el formulario no es válido, no se envía
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        // Añadir la clase Bootstrap "was-validated" para mostrar los mensajes de error
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
