const formulario = document.querySelector("#loginForm");
const email = document.querySelector("#email");
const contrasena = document.querySelector("#password");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

formulario.addEventListener("submit", function (e) {
  let esValido = true;

  if (email.value.trim() === "") {
    emailError.textContent = "Por favor complete el campo.";
    esValido = false;
  } else {
    emailError.textContent = ""; 
  }

  if (contrasena.value.trim() === "") {
    passwordError.textContent = "Por favor complete el campo.";
    esValido = false;
  } else {
    passwordError.textContent = ""; 
  }

  if (!esValido) {
    e.preventDefault();
  }
});