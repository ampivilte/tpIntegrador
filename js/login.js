const formulario = document.querySelector("#loginForm");
const email = document.querySelector("#email");
const contrasena = document.querySelector("#password");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

formulario.addEventListener("submit", function (e) {
  let esValido = true;

if (email.value.trim() === "") {
    alert("Por favor complete el campo email.");
    esValido = false;
}

if (contrasena.value.trim() === "") {
    alert("Por favor complete el campo contraseña.");
    esValido = false;
}

  if (!esValido) {
    e.preventDefault();
  }
});