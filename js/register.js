const formulario = document.querySelector("#registerForm");
const email = document.querySelector("#email");
const contrasena = document.querySelector("#password");
const termsConditions = document.querySelector("#terms");
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

  if (!termsConditions.checked) {
    alert("Debe aceptar los términos y condiciones.");
    esValido = false;
  }

  if (!esValido) {
    e.preventDefault();
  }
});