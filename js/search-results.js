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
        recetas.forEach(function (recipe) {
          html += `
            <article style="border: 1px solid #ddd; padding: 10px; width: 200px; text-align: center;">
              <img src="${recipe.image}" alt="${recipe.name}" style="width: 100%;">
              <h2>${recipe.name}</h2>
              <a href="receta.html?id=${recipe.id}" style="color: blue; text-decoration: underline;">Ver Detalle</a>
            </article>
          `;
        });

        resultadosContainer.innerHTML = html; 
      } else {
        noResultadosMensaje.style.display = "block";
      }
    })
    .catch(function (error) {
      console.error("Error al realizar la búsqueda:", error);
    });
} else {
  noResultadosMensaje.style.display = "block";
  noResultadosMensaje.textContent = "Por favor, ingresa un término de búsqueda válido.";
}