const parametros = new URLSearchParams(window.location.search);
const tag = parametros.get("tag");
const containerRecetas = document.getElementById("recipes");
const noRecetasMensajes = document.getElementById("no-recipes");

if (tag) {
  fetch(`https://dummyjson.com/recipes/tag/${tag}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const recetas = data.recipes;

      if (recetas && recetas.length > 0) {
        let html = "";

        for (let i = 0; i < recetas.length; i++) {
          html += `
            <article style="border: 1px solid #ddd; padding: 10px; width: 200px; text-align: center;">
              <img src="${recetas[i].image}" alt="${recetas[i].name}" style="width: 100%;">
              <h2>${recetas[i].name}</h2>
              <a href="receta.html?id=${recetas[i].id}" style="color: blue; text-decoration: underline;">Ver Detalle</a>
            </article>
          `;
        }
        containerRecetas.innerHTML = html;
      } else {
        noRecetasMensajes.style.display = "block";
        noRecetasMensajes.textContent = "No se encontraron recetas para esta categoría.";
      }
    })
    .catch(function (error) {
      noRecetasMensajes.style.display = "block";
      noRecetasMensajes.textContent = "Hubo un error al obtener las recetas.";
    });
} else {
  noRecetasMensajes.style.display = "block";
  noRecetasMensajes.textContent = "Por favor, selecciona una categoría válida.";
}