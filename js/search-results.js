const parametros = new URLSearchParams(window.location.search);
const buscarTerm = parametros.get("search");
const buscarTermElemento = document.querySelector(".term");
buscarTermElemento.textContent = buscarTerm;
const resultadosContainer = document.getElementById("results");
const noResultadosMensaje = document.getElementById("no-results");

if (buscarTerm) {
  fetch(`https://dummyjson.com/recipes/search?q=${buscarTerm}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      const recetas = data.recipes;
      if (recetas && recetas.length > 0) {
        let html = "";

        for (let i = 0; i < recetas.length; i++) {
          html += `
            <article class="resultados-busq">
              <img src="${recetas[i].image}" alt="${recetas[i].name}" style="width: 100%;">
              <h1>${recetas[i].name}</h1>
              <button><a href="receta.html?id=${recetas[i].id}">Ver</a></button>
            </article>
          `;
        }

        resultadosContainer.innerHTML = html;
      } else {
        noResultadosMensaje.style.display = "block";
      }
    })
    .catch(function () {
      noResultadosMensaje.style.display = "block";
      noResultadosMensaje.textContent = "Hubo un error al realizar la búsqueda.";
    });
} else {
  noResultadosMensaje.style.display = "block";
  noResultadosMensaje.textContent = "Por favor, ingresa un término de búsqueda válido.";
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("searchForm");
    const buscador = document.getElementById("searchInput");
  
    form.addEventListener("submit", function (event) {
      const terminoBuscado = buscador.value.trim();
      if (terminoBuscado === "") {
        event.preventDefault();
        alert("El campo de búsqueda no puede estar vacío.");
      } else if (terminoBuscado.length <= 3) {
        event.preventDefault();
        alert("El término de búsqueda debe tener más de tres caracteres.");
      }
    });
  });