fetch("https://dummyjson.com/recipes/tags")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let categories = data;
    let categoriesList = document.querySelector(".categories-list");
    let categoriaHTML = "";

    categoriesList.style.display = "flex";
    categoriesList.style.flexWrap = "wrap";
    categoriesList.style.justifyContent = "space-between";

    for (let i = 0; i < categories.length; i++) {
      categoriaHTML += `
        <article class="categories">
          <a href="./category.html?tag=${categories[i]}">${categories[i]}</a>
        </article>
      `;
    }

    categoriesList.innerHTML = categoriaHTML;
  })
  .catch(function (error) {
    console.error("Error al obtener las categorías:", error);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("searchForm");
    const buscador = document.getElementById("searchInput");
  
    form.addEventListener("submit", (event) => {
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