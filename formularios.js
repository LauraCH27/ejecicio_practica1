
const formButton = document.getElementById("formulario");

  formButton.addEventListener("click", function() {
    formModal.style.display = "";
  });

  numero.addEventListener("click", function() {
    id_error.innerHTML = "Solo se permiten números";
    setTimeout(function() {
        id_error.innerHTML = "";
    }, 1000);
  });

  direccion.addEventListener("click", function() {
    adress.innerHTML = "Este campo es obligatorio";
    setTimeout(function() {
      adress.innerHTML = "";
    }, 1000);
  });